import { Global, css } from "@emotion/react";

import { ReactComponent as FlIcon } from "@/assets/icon.svg";
import { ReactComponent as CloseIcon } from "@material-design-icons/svg/round/close.svg";
import { ReactComponent as CloseFullScreenIcon } from "@material-design-icons/svg/round/close_fullscreen.svg";
import { ReactComponent as EditOffIcon } from "@material-design-icons/svg/round/edit_off.svg";
import { ReactComponent as VisibilityOffIcon } from "@material-design-icons/svg/round/visibility_off.svg";
import { ReactComponent as SettingsIcon } from "@material-design-icons/svg/round/settings.svg";

import Note from "@/components/common/Note";

function ControlBar() {
  return (
    <div css={css`
      border-bottom: 1px solid rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `}>
      <button css={css`
        padding: 4px 1px;
      `}>
        <CloseFullScreenIcon css={css`
          width: 18px;
          height: 18px;
          fill: rgba(24,60,91,0.5);
        `}
        />
      </button>
      <button css={css`
        padding: 4px 1px;
        margin-right: 8px;
      `}>
        <CloseIcon css={css`
          width: 18px;
          height: 18px;
          fill: rgba(24,60,91,0.5);
        `}/>
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
        <VisibilityOffIcon css={css`
          fill: rgba(24,60,91,0.5);
          width: 18px;
          height: 18px;
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
        <EditOffIcon css={css`
          fill: rgba(24,60,91,0.5);
          width: 18px;
          height: 18px;
        `}/>
      </button>
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
        <SettingsIcon css={css`
          fill: rgba(24,60,91,1);
          width: 18px;
          height: 18px;
        `}/>
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
        box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
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
