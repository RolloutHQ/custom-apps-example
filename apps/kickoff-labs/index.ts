import { defineApp } from "@rollouthq/framework";

import { auth } from "./auth";
import * as actions from "./actions";
import * as triggers from "./triggers";

export const app = defineApp({
  name: "KickoffLabs",
  auth,
  actions,
  triggers,
});
