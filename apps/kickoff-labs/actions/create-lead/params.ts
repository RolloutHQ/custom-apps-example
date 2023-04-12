import { z } from "@rollouthq/framework";

export const inputParamsSchema = z.object({
  name: z.string(),
});
