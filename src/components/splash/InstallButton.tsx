import { css } from "@emotion/react";

import { ReactComponent as ChromeLogo } from "@/assets/chrome-logo.svg";

export default function InstallButton() {
  return (
    <>
      <button css={css`
        outline: none;
        font-family: inherit;
        font-size: inherit;
        padding: 14px 18px;
        border: 1px solid rgba(0,0,0,0);
        box-shadow: 0 1px 3px rgba(0,170,137,0.8);
        border-radius: 9999px;
        display: flex;
        align-items: center;
        color: rgba(255,255,255,1);
        background: rgba(0,170,137,1);
        position: relative;
      `}>
        <div css={css`
          position: absolute;
          background: rgba(255,255,255,1);
          width: 30px;
          height: 30px;
          left: 9px;
          border-radius: 9999px;
        `} />
        <ChromeLogo css={css`
          position: absolute;
          width: auto;
          height: 24px;
          z-index: 1;
          left: 12px;
        `} />
        <span css={css`
          display: block;
          margin-left: 30px;
          font-weight: bold;
        `}>
          + Add fluorescent to Chrome
        </span>
      </button>
      <div css={css`
        margin: 16px 0;
        text-align: center;
      `}>
        Or go to interactive demo
      </div>
    </>
  );
}
