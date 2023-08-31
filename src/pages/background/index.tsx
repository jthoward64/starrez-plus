import browser from "webextension-polyfill";

async function backgroundScript() {
  console.log("StarRez Plus background script loaded");
}

backgroundScript().catch(console.error);
