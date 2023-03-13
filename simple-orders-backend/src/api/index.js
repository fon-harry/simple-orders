import Fastify from 'fastify';
import cors from '@fastify/cors';
import AutoLoad from '@fastify/autoload';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async (services) => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.register(cors, {
    // TODO update options
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { services },
  });

  try {
    await fastify.listen({ port: '3000' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
