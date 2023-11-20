import { Database } from './types' // this is the Database interface we defined earlier
import { createPool } from 'mysql2' // do not use 'mysql2/promises'!
import { Kysely, MysqlDialect } from 'kysely'

const dialect = new MysqlDialect({
  pool: createPool({
    database: 'hipages',
    host: 'database',
    user: 'root',
    password: 'hipages',
    port: 3306,
    connectionLimit: 10,
  })
})

export const db = new Kysely<Database>({
  dialect,
})