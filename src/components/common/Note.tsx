import { css } from "@emotion/react";
import { MaterialSymbol } from "react-material-symbols";

export default function Note({className = ""}: {className?: string}) {
  return (
    <div className={className}>
      <div css={css`
        padding: 16px;
        line-height: 1.5em;
        background: rgb(52,227,101, 0.15);
      `}>
        <span css={css`
          background: rgb(52,227,101, 0.35);
        `}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, asperiores atque autem
          consequuntur cumque delectus deserunt dignissimos doloremque doloribus ducimus earum eius enim error
        </span>
      </div>
      <div css={css`
        border-top: 1px solid rgba(0,0,0,0.1);
        line-height: 1.5em;
        position: relative;
      `}>
        <div css={css`
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid rgba(237,237,237,1);
          top: -10px;
          left: 16px;
        `}/>
        <div css={css`
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #fff;
          top: -8.5px;
          left: 16px;
        `}/>
        <p css={css`
          margin: 16px;
        `}>
          Just taking down a note
        </p>

        <div css={css`
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid rgba(0,0,0,0.1);
          padding: 0 8px 0 16px;
        `}>
          <button css={css`
            display: flex;
            align-items: center;
            padding: 6px 0;
            margin-right: 10px;
          `}>
            <MaterialSymbol
              icon="edit"
              size={18}
              fill
              color="rgba(24,60,91,1)"
            />
          </button>
          <button css={css`
            display: flex;
            align-items: center;
            padding: 6px 0;
          `}>
            <MaterialSymbol
              icon="more_vert"
              size={18}
              fill
              color="rgba(24,60,91,1)"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
