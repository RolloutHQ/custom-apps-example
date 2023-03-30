import fs from "fs";

import { defineApp } from "@rollouthq/api/engine/define-app";
import { defineAuth } from "@rollouthq/api/engine/define-auth";

import * as actions from "./actions";

export const app = defineApp({
  name: "KickoffLabs",
  icon: fs.readFileSync(require.resolve("./icon.svg"), { encoding: "utf-8" }),
  actions,
  triggers: {},
  auth: defineAuth({
    type: "apiToken",
    customParams: [
      {
        key: "token",
        label: "Token",
      },
    ],
    async getCredentialOption() {
      return {
        id: "8d5e47c7-5e41-4806-a828-49504c638bf9",
        label: "User 1",
      };
    },
    async testConnection() {
      return true;
    },
  }),
});
