import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'

const sql = neon("postgresql://Emmanuel:npg_LSC3KsXAZQI1@ep-summer-frog-a8bzn1r1-pooler.eastus2.azure.neon.tech/Expense-tracker?sslmode=require")
export const db = drizzle( sql , {schema});