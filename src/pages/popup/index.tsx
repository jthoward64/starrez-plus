import { render } from "preact";

import "./index.css";
import "@assets/styles/tailwind.css";
import Popup from "@pages/popup/Popup";

async function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Popup root element");
  render(<Popup />, rootContainer);
}

init().catch(console.error);
