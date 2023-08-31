import logo from "@assets/img/logo.svg";
import { STARREZ_AUTH_TOKEN_STORAGE_KEY } from "@src/lib/constants";

import { useState } from "preact/hooks";
import browser from "webextension-polyfill";

export default function Popup() {
  const [tokenInput, setTokenInput] = useState("");

  const onSubmit = () => {
    browser.storage.local
      .set({ [STARREZ_AUTH_TOKEN_STORAGE_KEY]: tokenInput })
      .then(() => {
        setTokenInput("");
        window.close();
      });
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
      <header className="flex flex-col items-center justify-center text-white">
        <img
          src={logo}
          className="h-36 pointer-events-none animate-spin-slow"
          alt="logo"
        />
        <p>
          Edit <code>src/pages/popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <p>Popup styled with TailwindCSS!</p>
      </header>
      <form onSubmit={onSubmit}>
        <label className="text-white" htmlFor="token">
          Enter your StarRez API token:
        </label>
        <input
          className="bg-gray-700 text-white p-2 rounded"
          type="text"
          id="token"
          value={tokenInput}
          onChange={(e) => setTokenInput(e.target?.value)}
        />
        <button className="bg-blue-400 text-white p-2 rounded" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
