import { select } from "squel";
import { StarRezRestConfig } from "@lib/starrez-rest/StarRezRestConfig";
import { Entry } from "@lib/starrez-rest/structures/Entry";
import { doStarRezQuery } from "@src/lib/starrez-rest/StarRezRequest";
import { getToken } from "./auth";

async function init() {
  const config: StarRezRestConfig = {
    baseUrl: "https://starport.uky.edu/StarRezREST",
    portalUrl: "https://starport.uky.edu/StarRezWeb",
  };

  const token = await getToken(config);
  console.log(token);
  config.authorizationHeader = `Bearer ${token}`;

  const myEntry = await Entry.fetchById(250788, config);
  console.log(myEntry);

  const myLastName = await doStarRezQuery(
    // "SELECT Entry.NameLast from Entry WHERE Entry.EntryID=250788",
    select()
      .from("Entry")
      .field("Entry.NameLast")
      .where("Entry.EntryID=250788"),
    { ...config, simpleXml: true }
  );
  console.log(myLastName);

  console.log("StarRez Plus content script loaded");
}

document.addEventListener("DOMContentLoaded", () => {
  init().catch(console.error);
});
