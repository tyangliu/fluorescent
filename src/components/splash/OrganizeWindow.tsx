import { css } from "@emotion/react";

export default function OrganizeWindow() {
  return (
    <div css={css`
      flex: 1;
      height: 330px;
      background: #fff;
      border-radius: 8px;
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 1px 6px rgba(0,0,0,0.02);
      position: relative;
      overflow: hidden;
    `}>
      <div css={css`
        position: absolute;
        width: 100%;
        height: 15%;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgb(49,226,103);
        background: linear-gradient(0deg, rgba(49,226,103,1) 0%, rgba(172,215,78,1) 32%, rgba(244,208,64,0) 100%);
        opacity: 0.1;
      `}/>
    </div>
  );
}
