import React from "react";
import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

import { fontStyles } from "@/chrome-extension/font-styles";
import Panel from "@/components/content/Panel";

function PanelContainer() {
  const [open, setOpen] = React.useState(false);

  chrome.runtime.onMessage.addListener((message) => {
    if (message.action == "toggle") {
      setOpen(!open);
    }
  });

  return (
    <div css={css`
      all: initial;
      opacity: ${open ? 1 : 0};
      pointer-events: ${open ? "auto" : "none"};
      position: fixed;
      top: 0;
      right: 0;
      width: 400px;
      height: 100vh;
      z-index: 9999999;
      padding: 10px;
      box-sizing: border-box;
      transform: translateX(${open ? 0 : 300}px);
      transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    `}>
      <Global styles={css`
        ${emotionReset}
        ${fontStyles}
      `}/>
      <Panel />
    </div>
  );
}

function init() {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({matches}) => {
      chrome.runtime.sendMessage({ scheme: matches ? "dark" : "light" });
    });

  const {host, shadowRoot} = injectShadowRoot(`fl-host-${chrome.runtime.id}`);

  // In Chromium, @font-face in shadow DOM alone does not work, and must added to both
  // the light and shadow DOM.
  // See: https://bugs.chromium.org/p/chromium/issues/detail?id=336876
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.appendChild(document.createTextNode(fontStyles));

  host.appendChild(style);

  const cache = createCache({
    key: `fl-emotion-cache-${chrome.runtime.id}`,
    prepend: true,
    container: shadowRoot,
  });

  const reactRoot = ReactDOM.createRoot(shadowRoot);
  reactRoot.render(
    <React.StrictMode>
      <CacheProvider value={cache}>
        <PanelContainer />
      </CacheProvider>
    </React.StrictMode>
  );
}

function injectShadowRoot(id: string) {
  let host = document.getElementById(id);
  if (!host) {
    host = document.createElement("div");
    host.setAttribute("id", id);
    document.body.appendChild(host);
  }

  let shadowRoot = host.shadowRoot;
  if (!shadowRoot) {
    shadowRoot = host.attachShadow({ mode: "open" });
  }
  return {host, shadowRoot};
}

init();
