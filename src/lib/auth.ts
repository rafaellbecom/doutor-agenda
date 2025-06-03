import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  user: {
    modelName: "usersTable",
  },
  sessions: {
    modelName: "sessionsTable",
  },
  accounts: {
    modelName: "accountsTable",
  },
  verifications: {
    modelName: "verificationsTable",
  },
});
