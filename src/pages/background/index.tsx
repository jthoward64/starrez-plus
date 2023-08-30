import browser from "webextension-polyfill";
import { select } from "squel";
import { StarRezRestConfig } from "@src/lib/starrez-rest/StarRezRestConfig";
import { Entry } from "@src/lib/starrez-rest/structures/Entry";
import { doStarRezQuery } from "@src/lib/starrez-rest/StarRezQuery";

async function backgroundScript() {
  console.log("StarRez Plus background script loaded");

  const config: StarRezRestConfig = {
    baseUrl: new URL("https://starport.uky.edu/StarRezREST"),
    fetchHeaders: {
      Authorization: "Basic " + btoa("jtho264:Eduroam 5uck5"),
    },
  };

  const myEntry = await Entry.fetchById(250788, config);
  console.log(myEntry);

  const myLastName = doStarRezQuery(
    // "SELECT Entry.NameLast from Entry WHERE Entry.EntryID=250788",
    select()
      .from("Entry")
      .field("Entry.NameLast")
      .where("Entry.EntryID=250788"),
    config
  );
  console.log(myLastName);
}

backgroundScript().catch(console.error);
