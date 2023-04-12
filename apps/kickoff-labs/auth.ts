import { AppCredential, defineApiTokenAuth } from "@rollouthq/framework";
import cowsay from "cowsay";

export type KickoffLabsCredential = AppCredential<"apiToken">;

export const auth = defineApiTokenAuth<KickoffLabsCredential>({
  customParams: [{ key: "apiKey", label: "API key" }],

  async getCredentialOption({ credential }) {
    // const user = await fetch("https://kickofflabs.com/api/me", {
    //   headers: {
    //     Authorization: `Bearer ${credential.info.apiKey}`,
    //   },
    // }).then((resp) => resp.json());

    // return {
    //   label: user.fullName,
    //   avatar: user.avatar,
    // };

    return {
      label: cowsay.say({ text: "Moo!" }),
    }
  },

  async testConnection(token) {
    return token.apiKey === "test";
  },
});
