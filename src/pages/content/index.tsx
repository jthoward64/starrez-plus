import { StarRezRestConfig } from "@lib/starrez-rest/StarRezRestConfig";
import { getToken } from "./auth";
import { addCloseAllButton } from "./addCloseAllButton";

function staticUiModifications() {
  addCloseAllButton();
}

async function init() {
  console.log("StarRez Plus content script initializing");

  const config: StarRezRestConfig = {
    baseUrl: "https://starport.uky.edu/StarRezREST",
    portalUrl: "https://starport.uky.edu/StarRezWeb",
  };

  staticUiModifications();

  try {
    const token = await getToken(config);
    console.log(token);
    config.authorizationHeader = `Bearer ${token}`;
  } catch (e) {
    console.error("Failed to acquire, running unauthenticated");
    console.error(e);
  }

  console.log("StarRez Plus content script successfully initialized");
}

document.addEventListener("DOMContentLoaded", () => {
  init().catch(console.error);
});
