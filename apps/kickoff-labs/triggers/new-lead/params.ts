import { z } from "@rollouthq/framework";

export const inputParamsSchema = z.object({
  someParam: z.string(),
});
