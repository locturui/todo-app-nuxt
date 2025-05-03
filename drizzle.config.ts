import "dotenv/config";
import { defineConfig } from "drizzle-kit";

import env from "./lib/env";

export default defineConfig({
	out: "./lib/db/migrations",
	schema: "./lib/db/schema.ts",
	casing: "snake_case",
	dialect: "turso",
	dbCredentials: {
		url: env.DATABASE_URL,
		authToken: env.TOKEN,
	},
});
