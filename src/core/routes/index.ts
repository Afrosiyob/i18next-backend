import { Express, NextFunction, Request, Response } from "express";
import { clientBuild } from "../../app";
import {
  createTagHandler,
  deleteTagHandler,
  getTagHandler,
  updateTagHandler,
} from "../controller/tag.controller";
import { isKey, validate } from "../middleware";
import {
  createTagSchema,
  deleteTagSchema,
  getTagSchema,
  updateTagSchema,
} from "../schema/tag.schema";

const routes = (app: Express) => {
  app.get("/*", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(clientBuild);
  });

  app.post("/api/tag", [validate(createTagSchema)], createTagHandler);

  app.get("/api/tag/:key", [validate(getTagSchema)], getTagHandler);

  app.put("/api/tag/:key", [validate(updateTagSchema)], updateTagHandler);

  app.delete("/api/tag/:key", [validate(deleteTagSchema)], deleteTagHandler);
};

export default routes;
