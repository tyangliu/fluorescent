import { Global, css } from "@emotion/react";

import { ReactComponent as FlIcon } from "@/assets/icon.svg";
import { MaterialSymbol } from "react-material-symbols";

import Note from "@/components/common/Note";
import VColorList from "@/components/common/VColorList";

function ControlBar() {
  return (
    <div css={css`
      border-bottom: 1px solid rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `}>
      <button css={css`
        padding: 1px;
        display: flex;
        align-items: center;
      `}>
        <MaterialSymbol
          icon="close_fullscreen"
          size={18}
          fill
          color="rgba(24,60,91,0.5)"
        />
      </button>
      <button css={css`
        padding: 4px 1px;
        margin-right: 8px;
        display: flex;
        align-items: center;
      `}>
        <MaterialSymbol
          icon="close"
          size={18}
          fill
          color="rgba(24,60,91,0.5)"
        />
      </button>
    </div>
  );
}

function ToolBar() {
  return (
    <div css={css`
      width: 40px;
      height: 100%;
    `}>
      <button css={css`
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      `}>
        <FlIcon css={css`
          width: 30px;
          height: 30px;
        `}/>
      </button>
      <button css={css`
        background: none;
        border: none;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      `}>
        <MaterialSymbol
          icon="visibility_off"
          size={18}
          fill
          color="rgba(24,60,91,0.5)"
        />
      </button>
      <button css={css`
        background: none;
        border: none;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      `}>
        <MaterialSymbol
          icon="edit_off"
          size={18}
          fill
          color="rgba(24,60,91,0.5)"
        />
      </button>
      <VColorList />
    </div>
  );
}

function PanelNav() {
  return (
    <div css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    `}>
      <ul
        className="panel-nav-list"
        css={css`
          display: flex;
          align-items: center;
          margin: 0 12px;
        `}
      >
        <Global styles={css`
          .panel-nav-list li {
            margin-right: 20px;
            font-size: 14px;
            padding: 12px 2px;
          }
        `}/>
        <li css={css`
          font-weight: bold;
          position: relative;
        `}>
          <div css={css`
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            width: 26px;
            height: 4px;
            margin: auto;
            background: rgba(24,60,91,1);
            border-radius: 9999px;
          `}/>
          <span>Notes</span>
        </li>
        <li>Find</li>
        <li>Chat</li>
      </ul>
      <button css={css`
        display: flex;
        align-items: center;
        padding: 12px 9px;
        margin-right: 9px;
      `}>
        <MaterialSymbol
          icon="settings"
          size={18}
          fill
          color="rgba(24,60,91,1)"
        />
      </button>
    </div>
  );
}

function PanelPageList() {
  return (
    <ul>
      <li css={css`
        margin: 10px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      `}>
        <Note />
      </li>
      <li css={css`
        margin: 10px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      `}>
        <Note />
      </li>
    </ul>
  );
}

function PanelMain() {
  return (
    <div css={css`
      flex: 1;
      border-left: 1px solid rgba(0,0,0,0.1);
    `}>
      <PanelNav />
      <PanelPageList />
    </div>
  );
}

export default function Panel({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      css={css`
        color: rgba(24,60,91,1);
        font-size: 14px;
        height: 100%;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.15);
        font-family: "Work Sans", sans-serif;
        position: relative;
        display: flex;
        flex-direction: column;
      `}
    >
      <Global styles={css`
        button {
          font-family: inherit;
          font-size: inherit;
          color: inherit;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
        }
      `}/>
      <ControlBar />
      <div css={css`
        flex: 1;
        display: flex;
      `}>
        <ToolBar />
        <PanelMain />
      </div>
    </div>
  );
}
