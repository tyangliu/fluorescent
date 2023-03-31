import { css } from "@emotion/react";

export default function HColorList({className = ""}: {className?: string}) {
  return (
    <ul css={css`
      display: flex;
      align-items: center;
      padding: 6px;
    `}>
      <li css={css`
        width: 18px;
        height: 18px;
        background: rgba(244,208,64,1);
        border-radius: 3px;
        margin-right: 6px;
        position: relative;
      `}/>
      <li css={css`
        width: 18px;
        height: 18px;
        background: rgba(49,226,103,1);
        border-radius: 3px;
        margin-right: 6px;
        position: relative;
      `}>
        <div css={css`
          width: 100%;
          height: 4px;
          position: absolute;
          bottom: -9px;
          background: inherit;
          border-radius: 9999px;
        `}/>
      </li>
      <li css={css`
        width: 18px;
        height: 18px;
        background: rgba(57,208,241,1);
        border-radius: 3px;
        position: relative;
      `}/>
    </ul>
  );
}
