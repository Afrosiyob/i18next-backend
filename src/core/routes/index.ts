import { Express } from "express";
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
  app.get("/", (req, res, next) => {
    res.send("Hello");
  });

  app.post("/api/tag", [validate(createTagSchema)], createTagHandler);

  app.get("/api/tag/:key", [validate(getTagSchema)], getTagHandler);

  app.put("/api/tag/:key", [validate(updateTagSchema)], updateTagHandler);

  app.delete("/api/tag/:key", [validate(deleteTagSchema)], deleteTagHandler);
};

export default routes;
