import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://neondb_owner:LGZUApX73zxd@ep-withered-fog-a5khfvzq.us-east-2.aws.neon.tech/neondb?sslmode=require'
  }
});