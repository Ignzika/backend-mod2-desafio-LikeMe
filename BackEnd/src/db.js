import pg  from 'pg';
import { db } from './config.js';

export const pool = new pg.Pool(db);
// const pool = new pg.Pool({
//     host: 'localhost',
//     user: 'postgres',
//     password: 'voyager',
//     database: 'porcrear',
//     allowExitOnIdle: true
// });

// aviso de la DB si esta conectada
pool.on("connect", () => console.log("DATABASE connected"))