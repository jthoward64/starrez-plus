import "@pages/options/Options.css";
import { useEffect, useState } from "preact/hooks";
import { storage } from "webextension-polyfill";
import { STARREZ_AUTH_TOKEN_STORAGE_KEY } from "@lib/constants.js";

export default function Options() {
  const [foo, setFoo] = useState("");

  useEffect(() => {
    storage.local
      .get(STARREZ_AUTH_TOKEN_STORAGE_KEY)
      .then(({ foo }) => {
        setFoo(foo);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      Options
      <div>Foo: {foo}</div>
    </div>
  );
}
