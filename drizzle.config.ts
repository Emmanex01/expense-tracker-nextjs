import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://Emmanuel:npg_LSC3KsXAZQI1@ep-summer-frog-a8bzn1r1-pooler.eastus2.azure.neon.tech/Expense-tracker?sslmode=require",
  }
});
