import { css } from "@emotion/react";

export default function VColorList({className = ""}: {className?: string}) {
  return (
    <ul css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 6px;
    `}>
      <li css={css`
        width: 26px;
        height: 26px;
        background: rgba(244,208,64,1);
        border-radius: 4px;
        margin-bottom: 6px;
        position: relative;
      `}/>
      <li css={css`
        width: 26px;
        height: 26px;
        background: rgba(49,226,103,1);
        border-radius: 4px;
        margin-bottom: 6px;
        position: relative;
      `}>
        <div css={css`
          height: 100%;
          width: 4px;
          position: absolute;
          left: -9px;
          background: inherit;
          border-radius: 9999px;
        `}/>
      </li>
      <li css={css`
        width: 26px;
        height: 26px;
        background: rgba(57,208,241,1);
        border-radius: 4px;
        position: relative;
      `}/>
    </ul>
  );
}
