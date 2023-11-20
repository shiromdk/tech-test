import { Router, Request, Response } from "express";
import { getJobs, updateJob } from "./leads";

const router = Router();

export default (app: Router) => {
  app.use("/leads", router);

  router.get("/", async (req: Request, res: Response) => {
    try {
      let jobs = await getJobs(req);
      res.json(jobs);
    } catch (err) {
      res.json(err);
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      let updated = await updateJob(parseInt(req.params.id), req.body);
      res.json(updated);
    } catch (err) {
      res.json(err);
    }
  });
};
