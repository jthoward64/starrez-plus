import browser from "webextension-polyfill";
import { render } from "preact";

import Options from "./Options";
import "./index.css";

function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Options root element");
  render(<Options />, rootContainer);
}

init();
