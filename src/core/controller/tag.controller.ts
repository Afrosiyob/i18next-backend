import { Request, Response } from "express";
import {
  CreateTagInput,
  DeleteTagInput,
  GetTagInput,
  UpdateTagInput,
} from "../schema/tag.schema";

export const createTagHandler = async (
  req: Request<{}, {}, CreateTagInput["body"]>,
  res: Response
) => {
  const body = req.body;
  console.log(body);
  return res.sendStatus(200);
};

export const updateTagHandler = async (
  req: Request<UpdateTagInput["params"]>,
  res: Response
) => {
  const key = req.params.key;

  console.log(key);

  const update = req.body;

  console.log(update);

  // const product = await findProduct({ productId });

  // if (!product) return res.sendStatus(404);

  // if (String(product.user) !== userId) return res.sendStatus(403);

  // const updatedProduct = await findAndUpdateProduct({ productId }, update, {
  //   new: true,
  // });
  return res.sendStatus(200);
};

export const getTagHandler = async (
  req: Request<GetTagInput["params"]>,
  res: Response
) => {
  const key = req.params.key;

  console.log(key);

  // const product = await findProduct({ productId });

  // if (!product) return res.sendStatus(404);

  return res.sendStatus(200);
};

export const getAllTagHandler = async (req: Request, res: Response) => {
  // const userId = res.locals.user._id;
  // const products = getAllProduct({ user: userId });
  // console.log(products);
  return res.sendStatus(200);
};

export const deleteTagHandler = async (
  req: Request<DeleteTagInput["params"]>,
  res: Response
) => {
  const key = req.params.key;
  console.log(key);

  // const product = await findProduct({ productId });

  // if (!product) return res.sendStatus(404);

  // if (String(product.user) !== userId) return res.sendStatus(403);

  // await deleteProduct({ productId });

  return res.sendStatus(200);
};
