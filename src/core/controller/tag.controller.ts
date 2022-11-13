import { Request, Response } from "express";
import {
  CreateTagInput,
  DeleteTagInput,
  GetTagInput,
  UpdateTagInput,
} from "../schema/tag.schema";

import { jsonReader, readJsonFile } from "../utils/readFile";
import { findKey } from "../service/tag.service";
import { writeFile } from "../utils/writeFile";
import { isKey } from "../middleware";

export const createTagHandler = async (
  req: Request<{}, {}, CreateTagInput["body"]>,
  res: Response
) => {
  const body = req.body;

  const key = body.tag;

  const handleKey = isKey(key);

  if (handleKey) {
    return res.sendStatus(400).send({
      message: "enter other tag name",
    });
  } else {
    jsonReader("/locales/en/translation.json", (err: any, data: object) => {
      if (err) {
        console.log(err);
      } else {
        // @ts-ignore
        data[key] = body.en;
        writeFile("/locales/en/translation.json", data);
      }
    });

    jsonReader("/locales/uz/translation.json", (err: any, data: object) => {
      if (err) {
        console.log(err);
      } else {
        // @ts-ignore
        data[key] = body.uz;
        writeFile("/locales/uz/translation.json", data);
      }
    });

    return res.sendStatus(200);
  }
};

export const updateTagHandler = async (
  req: Request<UpdateTagInput["params"]>,
  res: Response
) => {
  const key = req.params.key;

  let en: object = readJsonFile("/locales/en/translation.json");
  let uz: object = readJsonFile("/locales/uz/translation.json");

  const isHasTagEn = findKey(key, en);
  const isHasTagUz = findKey(key, uz);

  if (isHasTagEn && isHasTagUz) {
    const update = req.body;

    jsonReader("/locales/en/translation.json", (err: any, data: object) => {
      if (err) {
        console.log(err);
      } else {
        // @ts-ignore
        data[key] = update.en;
        writeFile("/locales/en/translation.json", data);
      }
    });

    jsonReader("/locales/uz/translation.json", (err: any, data: object) => {
      if (err) {
        console.log(err);
      } else {
        // @ts-ignore
        data[key] = update.uz;
        writeFile("/locales/uz/translation.json", data);
      }
    });
    return res.sendStatus(200);
  } else {
    return res.sendStatus(404);
  }
};

export const getTagHandler = async (
  req: Request<GetTagInput["params"]>,
  res: Response
) => {
  const key = req.params.key;

  let en: object = readJsonFile("/locales/en/translation.json");
  let uz: object = readJsonFile("/locales/uz/translation.json");

  const isHasTagEn = findKey(key, en);
  const isHasTagUz = findKey(key, uz);

  if (isHasTagEn && isHasTagUz) {
    return res.send({
      data: [en[key as keyof typeof en], uz[key as keyof typeof uz]],
    });
  } else {
    return res.sendStatus(404);
  }
};

export const deleteTagHandler = async (
  req: Request<DeleteTagInput["params"]>,
  res: Response
) => {
  const key = req.params.key;

  let en: object = readJsonFile("/locales/en/translation.json");
  let uz: object = readJsonFile("/locales/uz/translation.json");

  const isHasTagEn = findKey(key, en);
  const isHasTagUz = findKey(key, uz);

  if (isHasTagEn && isHasTagUz) {
    jsonReader("/locales/en/translation.json", (err: any, data: object) => {
      if (err) {
        console.log(err);
      } else {
        // @ts-ignore
        delete data[key];

        writeFile("/locales/en/translation.json", data);
      }
    });

    jsonReader("/locales/uz/translation.json", (err: any, data: object) => {
      if (err) {
        console.log(err);
      } else {
        // @ts-ignore
        delete data[key];

        writeFile("/locales/uz/translation.json", data);
      }
    });
    return res.sendStatus(200);
  } else {
    return res.sendStatus(404);
  }
};
