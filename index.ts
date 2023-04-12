import * as apps from "./apps";
import { setupRollout } from "@rollouthq/framework";

export const config = setupRollout({
  clientKey: "kickoffLabs_duw8e9d07w809",
  apps,
  onAutomationRunResults({ execution }) {
    console.log("automation run result", execution);
  },
});
