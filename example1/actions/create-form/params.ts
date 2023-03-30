import { z } from "@rollouthq/common";

export const inputParamsSchema = z.object({
    name: z.string(),
});
