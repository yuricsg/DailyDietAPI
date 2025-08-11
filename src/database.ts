import knex from 'knex'
import type { Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
    client: 'sqlite3',
    connection: {
         filename: env.DATABASE_URL, 
    },

    useNullAsDefault: true,
    migrations: {
      extension: 'ts',
      directory: './db/migration',  
    },
}

export const db = knex(config)