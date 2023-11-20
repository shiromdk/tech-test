import { db } from "../../database";
import { Request } from "express";
import { Job, JobUpdate, NewJob } from "./types/type";
import { OperandValueExpression, expressionBuilder } from "kysely";
import { Database } from "../../types";


export const createJob = async (job: NewJob) => {
  return await db
    .insertInto("jobs")
    .values(job)
    .executeTakeFirstOrThrow();
};

export const getJobs = async (request: Request) => {
  // Set the limit to 25 as a default for now
  let limit: number = 25;
  const getJobsTransaction = await db.transaction().execute(async (trx) => {
    let jobs = trx
      .selectFrom("jobs")
      .leftJoin("categories", "categories.id", "jobs.category_id")
      .leftJoin("suburbs", "suburbs.id", "jobs.suburb_id");

    // We have this check here for both the invited and accepted tabs inside the SPA
    if (request.query.status === "accepted" || request.query.status === "new") {
      jobs = jobs.where("status", "=", request.query.status);
    }
    if (request.query.search) {
      const searchValue = `%${request.query.search}%`;
      jobs = jobs.where((expressionBuilder) =>
        expressionBuilder.or([
          expressionBuilder("jobs.contact_name", "like", searchValue),
          expressionBuilder("jobs.contact_email", "like", searchValue),
          expressionBuilder("categories.name", "like", searchValue),
          expressionBuilder("suburbs.name", "like", searchValue),
        ]),
      );
    }

    // Handling pagination
    if (request.query.limit) {
      limit = parseInt(request.query.limit as string);
    }

    jobs = jobs.limit(limit);
    // Page + Offset
    if (request.query.page) {
      let page: number = parseInt(request.query.page as string);
      // Calculating offset based of limit and page number
      jobs = jobs.offset(limit * (page - 1));
    }

    // We have to create a new variable since the type changes
    // when we chain on the execute function
    let jobData = await jobs
      .select([
        "jobs.id",
        "jobs.contact_name",
        "jobs.contact_phone",
        "jobs.contact_email",
        "jobs.created_at",
        "jobs.updated_at",
        "jobs.price",
        "jobs.description",
        "jobs.status",
        "suburbs.name as suburb_name",
        "suburbs.postcode",
        "categories.name as category",
      ])
      .execute();
    // Return the count with the data in the same transaction to keep consistency.
    let countTrx = trx
      .selectFrom("jobs")
      .leftJoin("categories", "categories.id", "jobs.category_id")
      .leftJoin("suburbs", "suburbs.id", "jobs.suburb_id")
      .select((expressionBuilder) => {
        return expressionBuilder.fn.count<number>("jobs.status").as("count");
      })
      .where(
        "jobs.status",
        "=",
        (request.query.status as OperandValueExpression<
          Database,
          "jobs",
          "jobs.status"
        >) || "new",
      );
    // We have to add this query onto the count as well to get the correct number
    if (request.query.search) {
      const searchValue = `%${request.query.search}%`;
      countTrx = countTrx.where((expressionBuilder) =>
        expressionBuilder.or([
          expressionBuilder("jobs.contact_name", "like", searchValue),
          expressionBuilder("jobs.contact_email", "like", searchValue),
          expressionBuilder("categories.name", "like", searchValue),
          expressionBuilder("suburbs.name", "like", searchValue),
        ]),
      );
    }

    const { count } = await countTrx.executeTakeFirstOrThrow();
    return {
      data: jobData,
      count,
    };
  });
  return getJobsTransaction;
};

export const updateJob = async (id: number, updateWith: JobUpdate) => {
  let updatedJob = await db
    .updateTable("jobs")
    .set(updateWith)
    .where("id", "=", id)
    .executeTakeFirst();
  return updatedJob;
};
