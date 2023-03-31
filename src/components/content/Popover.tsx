import { Global, css } from "@emotion/react";
import { MaterialSymbol } from "react-material-symbols";

import HColorList from "@/components/common/HColorList";
import ActionButton from "@/components/common/ActionButton";

export default function Popover() {
  return (
    <div css={css`
      color: rgba(24,60,91,1);
      font-size: 14px;
      height: 100%;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.15);
      font-family: "Work Sans", sans-serif;
    `}>
      <div css={css`
        border-bottom: 1px solid rgba(0,0,0,0.1);
        padding: 16px;
        line-height: 1.5em;
        position: relative;
      `}>
        <div css={css`
          filter: blur(1px);
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid rgba(0,0,0,0.15);
          top: -10px;
          left: 16px;
          z-index: -1;
        `}/>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euis
        </p>
      </div>
      <div css={css`
        display: flex;
        justify-content: space-between;
      `}>
        <div css={css`
          display: flex;
          align-items: center;
        `}>
          <ActionButton css={css`
            border-right: 1px solid rgba(0,0,0,0.1);
          `}>
            <MaterialSymbol
              icon="comment"
              size={18}
              fill
              color="rgba(24,60,91,1)"
            />
          </ActionButton>
          <ActionButton css={css`
            border-right: 1px solid rgba(0,0,0,0.1);
          `}>
            <MaterialSymbol
              icon="delete"
              size={18}
              fill
              color="rgba(24,60,91,1)"
            />
          </ActionButton>
          <ActionButton css={css`
            border-right: 1px solid rgba(0,0,0,0.1);
          `}>
            <MaterialSymbol
              icon="text_select_end"
              size={18}
              fill
              color="rgba(24,60,91,1)"
            />
          </ActionButton>
          <HColorList />
        </div>
        <div css={css`
          display: flex;
          align-items: center;
        `}>
          <ActionButton>
            <MaterialSymbol
              icon="close"
              size={18}
              fill
              color="rgba(24,60,91,1)"
            />
          </ActionButton>
          <ActionButton>
            <MaterialSymbol
              icon="done"
              size={18}
              fill
              color="rgba(24,60,91,1)"
            />
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
