import { InsertTasksSchema, tasks } from "~/lib/db/schema";
import db from "~/lib/db";

export default defineEventHandler(async (event) => {
	const result = await readValidatedBody(event, InsertTasksSchema.safeParse);
	if (!result.success) {
		return sendError(event, createError({
			statusCode: 422,
			statusMessage: "Invalid request body",
		}));
	}

	const [created] = await db.insert(tasks)
		.values(result.data).returning();

	return created;
});
