import workSansRegUrl from "@/assets/fonts/work-sans-v18-latin-regular.woff2";
import workSansItUrl from "@/assets/fonts/work-sans-v18-latin-italic.woff2";
import workSansBoldUrl from "@/assets/fonts/work-sans-v18-latin-700.woff2";
import workSansBoldItUrl from "@/assets/fonts/work-sans-v18-latin-700italic.woff2";
import libreBaskervilleRegUrl from "@/assets/fonts/libre-baskerville-v14-latin-regular.woff2"
import libreBaskevilleBoldUrl from "@/assets/fonts/libre-baskerville-v14-latin-700.woff2"
import loraRegUrl from "@/assets/fonts/lora-v32-latin-regular.woff2";
import loraBoldUrl from "@/assets/fonts/lora-v32-latin-700.woff2";
import materialSymbolsUrl from "@/assets/fonts/material-symbols-rounded.woff2";

export const fontStyles = `
  /* work-sans-regular - latin */
  @font-face {
    font-display: swap;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    src: url('${chrome.runtime.getURL(workSansRegUrl)}') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+ */
  }
  /* work-sans-italic - latin */
  @font-face {
    font-display: swap;
    font-family: 'Work Sans';
    font-style: italic;
    font-weight: 400;
    src: url('${chrome.runtime.getURL(workSansItUrl)}') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+ */
  }
  /* work-sans-700 - latin */
  @font-face {
    font-display: swap;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    src: url('${chrome.runtime.getURL(workSansBoldUrl)}') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+ */
  }
  /* work-sans-700italic - latin */
  @font-face {
    font-display: swap;
    font-family: 'Work Sans';
    font-style: italic;
    font-weight: 700;
    src: url('${chrome.runtime.getURL(workSansBoldItUrl)}') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+ */
  }

  /* libre-baskerville-regular - latin */
  @font-face {
    font-display: swap;
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 400;
    src: url('${chrome.runtime.getURL(libreBaskervilleRegUrl)}') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+ */
  }
  /* libre-baskerville-700 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 700;
    src: url('${chrome.runtime.getURL(libreBaskevilleBoldUrl)}') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+ */
  }

  /* lora-regular - latin */
  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    src: url('${chrome.runtime.getURL(loraRegUrl)}') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+ */
  }
  /* lora-700 - latin */
  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    src: url('${chrome.runtime.getURL(loraBoldUrl)}') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Material Symbols Rounded';
    font-style: normal;
    src: url('${chrome.runtime.getURL(materialSymbolsUrl)}') format('woff2');
  }

  .material-symbols {
    user-select: none;
    font-weight: normal;
    font-style: normal;
    font-size: inherit;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    font-family: 'Material Symbols Rounded';
  }

`;
