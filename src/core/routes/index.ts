import { Express } from "express";
import {
  createTagHandler,
  getTagHandler,
  updateTagHandler,
} from "../controller/tag.controller";
import { validate } from "../middleware";
import {
  createTagSchema,
  deleteTagSchema,
  getTagSchema,
  updateTagSchema,
} from "../schema/tag.schema";

const routes = (app: Express) => {
  app.post("/api/tag", validate(createTagSchema), createTagHandler);

  app.get("/api/tag/:key", validate(getTagSchema), getTagHandler);

  app.put("/api/tag/:key", validate(updateTagSchema), updateTagHandler);

  app.delete("/api/tag/:key", validate(deleteTagSchema), getTagHandler);
};

export default routes;
