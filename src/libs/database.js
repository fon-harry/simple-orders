import pg from 'pg';
import pgConfig from '../../database/config.js';

export default () => new pg.Pool(pgConfig);
