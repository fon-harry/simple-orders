import Postgrator from 'postgrator';
import pg from 'pg';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import pgConfig from './config.js';

const schemaVersion = process.argv[2];
if (schemaVersion && isNaN(schemaVersion)) {
  console.error(`${schemaVersion} is not a number`);
  process.exit(1);
}

const migrateToVersion = schemaVersion ? Number(schemaVersion).toString() : '';

function logMessage(message) {
  const messagePrefix = `[${new Date().toLocaleTimeString()}]`;
  console.log(`${messagePrefix} ${message}`);
}

(async () => {
  const client = new pg.Client(pgConfig);

  try {
    await client.connect();

    const postgrator = new Postgrator({
      migrationPattern: path.join(__dirname, '/migrations/*'),
      driver: 'pg',
      execQuery: (query) => client.query(query),
    });

    postgrator.on('validation-started', (migration) =>
      logMessage(`verifying checksum of migration ${migration.filename}`),
    );
    postgrator.on('migration-started', (migration) =>
      logMessage(`running ${migration.filename}`),
    );

    const databaseVersion = await postgrator.getDatabaseVersion().catch(() => {
      logMessage(
        `table ${postgrator.commonClient.quotedSchemaTable()} does not exist - creating it.`,
      );
      return 0;
    });

    logMessage(`version of database is: ${databaseVersion}`);
    logMessage(
      `migrating ${
        migrateToVersion >= databaseVersion ? 'up' : 'down'
      } to ${migrateToVersion}`,
    );

    await postgrator.migrate(migrateToVersion);
  } catch (error) {
    console.error(error);
  } finally {
    await client.end();
  }
})();
