import { Application } from "express";
import getApp from "./app";
import redisClient from "./redis";
import { generateJobData } from "./feature/leads/helper";
import { createJob } from "./feature/leads/leads";

(async () => {
  const app: Application = getApp();
  await redisClient.connect();
  app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
    setInterval(async () => {
      try {
        const promiseArray = [];
        for (let i = 0; i < 10; i++) {
          const jobData = generateJobData();
          const insertIntoDb = createJob(jobData);
          promiseArray.push(insertIntoDb);
        }
        await Promise.all(promiseArray);
      } catch (err) {
        // do nothing for now
      }
    }, 10000);
  });
})();
