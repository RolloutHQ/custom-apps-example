import { defineAction } from "@rollouthq/framework";
import { KickoffLabsCredential } from "../../auth";

import { inputParamsSchema } from "./params";

export const action = defineAction<KickoffLabsCredential>()({
  name: "Create a new lead",
  inputParamsSchema,
  async execute({ credential, resolvedInputParams }) {
    console.log("Executing createLead action", resolvedInputParams, credential);

    return {
      name: resolvedInputParams.name
    };
  },
});
