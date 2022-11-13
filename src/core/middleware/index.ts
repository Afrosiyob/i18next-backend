import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import { findKey } from "../service/tag.service";
import { readJsonFile } from "../utils/readFile";

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      return res.status(400).send(error.message);
    }
  };

export const isKey = (key: string) => {
  let en: object = readJsonFile("/locales/en/translation.json");
  let uz: object = readJsonFile("/locales/uz/translation.json");

  const isHasTagEn = findKey(key, en);
  const isHasTagUz = findKey(key, uz);

  if (isHasTagEn && isHasTagUz) {
    return true;
  } else {
    return false;
  }
};
