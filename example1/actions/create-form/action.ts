import { defineThirdPartyAction } from "@rollouthq/api/engine/define-action";

import { inputParamsSchema } from "./params";

type TestThirdPartyCredential = {};

export const createForm = defineThirdPartyAction<TestThirdPartyCredential>()({
  name: "Create a new form",
  inputParamsSchema,
  frontendDefinitionPath: require.resolve("./frontend-definition"),
  async execute({ credential, resolvedInputParams }) {
    console.log("Executing Test action", resolvedInputParams);
    return {};
  },
});
