import { defineWebhookTrigger } from "@rollouthq/framework";

import { KickoffLabsCredential } from "../../auth";
import { inputParamsSchema } from "./params";
import { payloadSchema } from "./payload";
import { Component } from "./component";

export const trigger = defineWebhookTrigger<KickoffLabsCredential>()({
  name: "New Lead",
  inputParamsSchema,
  payloadSchema,
  async setup({ credential, targetUrl }) {
    // todo
    return {
      ok: true,
      data: {
        webhookId: "testhook",
      },
    };
  },

  async delete({ credential, webhookId }) {
    // todo
    return {
      ok: true,
    };
  },

  async handleEvent({ incomingRequest }) {
    const data = JSON.parse(incomingRequest.body);

    return [
      {
        payload: {
          // todo
          id: "testLead",
          name: "Test Lead",
        },
      },
    ];
  },
});
