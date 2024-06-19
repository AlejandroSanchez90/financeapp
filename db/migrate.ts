import 'dotenv/config'
import { migrate } from 'drizzle-orm/neon-http/migrator'
import { db, sql } from './drizzle'
// This will run migrations on the database, skipping the ones already applied
const main = async () => {
  await migrate(db, { migrationsFolder: '../drizzle' })
}
main()
// Don't forget to close the connection, otherwise the script will hang
