import { render } from "preact";
import { notifications } from "webextension-polyfill";

import "./index.css";
import "@assets/styles/tailwind.css";
import Popup from "@pages/popup/Popup";

function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Popup root element");
  render(<Popup />, rootContainer);
  notifications.create({
    type: "basic",
    title: "StarRez Plus",
    message: "StarRez Plus popup script loaded",
  });
}

init();
