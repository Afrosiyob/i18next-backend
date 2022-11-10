import { object, string, TypeOf } from "zod";

const params = {
  params: object({
    key: string({
      required_error: "Key is required",
    }),
  }),
};

const payload = {
  body: object({
    key: string({
      required_error: "Key is required",
    }),
    value: string({
      required_error: "Value is required",
    }),
  }),
};

export const createTagSchema = object({
  ...payload,
});

export const deleteTagSchema = object({
  ...params,
});

export const updateTagSchema = object({
  ...payload,
  ...params,
});

export const getTagSchema = object({
  ...params,
});

export type CreateTagInput = TypeOf<typeof createTagSchema>;
export type DeleteTagInput = TypeOf<typeof deleteTagSchema>;
export type UpdateTagInput = TypeOf<typeof updateTagSchema>;
export type GetTagInput = TypeOf<typeof getTagSchema>;
