import React from "react"
import ReactDOM from "react-dom/client";
import { Global, css } from "@emotion/react";

import App from "@/components/options/App"
import { fontStyles } from "@/chrome-extension/font-styles";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global styles={css`${fontStyles}`} />
    <App />
  </React.StrictMode>,
);
