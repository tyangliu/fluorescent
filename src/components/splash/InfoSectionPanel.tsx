import { Global, css } from "@emotion/react";

import { MaterialSymbol } from "react-material-symbols";
import { ReactComponent as FlIcon } from "@/assets/icon.svg";

function InfoSectionPanelNav({activeTabIdx = 0}) {
  const tabs = ["Notes", "Find", "Chat"];
  return (
    <div css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    `}>
      <ul
        className="info-section-panel-nav-list"
        css={css`
          display: flex;
          align-items: center;
          margin: 0 8px;
        `}
      >
        <Global styles={css`
          .info-section-panel-nav-list li {
            margin-right: 6px;
            font-size: 12px;
            padding: 8px 0;
          }
        `}/>
        {
          tabs.map((tab, idx) => (
            <li
              key={idx}
              css={css`
                width: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: ${idx === activeTabIdx ? "bold" : "normal"};
                position: relative;
              `}
            >
              <div css={css`
                position: absolute;
                left: 0;
                right: 0;
                bottom: 3px;
                width: 17px;
                height: 3px;
                margin: auto;
                background: rgba(24,60,91,1);
                border-radius: 9999px;
                opacity: ${idx === activeTabIdx ? 1 : 0};
              `}/>
              <span>{tab}</span>
            </li>
          ))
        }
      </ul>
      <button css={css`
        display: flex;
        align-items: center;
        padding: 4px 2px;
        margin-right: 10px;
        background: none;
        border: none;
        outline: none;
      `}>
        <MaterialSymbol
          icon="settings"
          size={14}
          fill
          color="rgba(24,60,91,1)"
        />
      </button>
    </div>
  );
}

export default function InfoSectionPanel({activeTabIdx = 0, children}: {activeTabIdx?: number, children: React.ReactNode}) {
  return (
    <div css={css`
      border-bottom: none;
      height: 100%;
      display: flex;
      flex-direction: column;
    `}>
      <div css={css`
        width: 100%;
        height: 18px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      `}/>
      <div css={css`
        display: flex;
        flex: 1;
      `}>
        <div css={css`
          width: 30px;
          border-right: 1px solid rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        `}>
          <div css={css`
            width: 100%;
            height: 16px;
            margin: 10px 0 6px;
            display: flex;
            align-items: center;
            justify-content: center;
          `}>
            <FlIcon css={css`
              width: 18px;
              height: 18px;
            `}/>
          </div>
          <div css={css`
            width: 100%;
            height: 16px;
            margin: 0 0 6px;
            display: flex;
            align-items: center;
            justify-content: center;
          `}>
            <div css={css`
              width: 16px;
              height: 16px;
              background: rgba(0,0,0,0.05);
              border-radius: 9999px;
            `} />
          </div>
          <div css={css`
            width: 100%;
            height: 16px;
            margin: 0 0 6px;
            display: flex;
            align-items: center;
            justify-content: center;
          `}>
            <div css={css`
              width: 16px;
              height: 16px;
              background: rgba(0,0,0,0.05);
              border-radius: 9999px;
            `} />
          </div>
          <ul css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 3px;
          `}>
            <li css={css`
              width: 18px;
              height: 18px;
              background: rgba(244,208,64,1);
              border-radius: 3px;
              margin-bottom: 4px;
              position: relative;
            `} />
            <li css={css`
              width: 18px;
              height: 18px;
              background: rgba(49,226,103,1);
              border-radius: 3px;
              margin-bottom: 4px;
              position: relative;
            `}/>
            <li css={css`
              width: 18px;
              height: 18px;
              background: rgba(57,208,241,1);
              border-radius: 3px;
              position: relative;
            `}>
              <div css={css`
                height: 100%;
                width: 3px;
                position: absolute;
                left: -7.5px;
                background: inherit;
                border-radius: 9999px;
              `} />
            </li>
          </ul>
        </div>
        <div css={css`
          flex: 1;
          font-size: 12px;
          line-height: 1.5em;
        `}>
          <InfoSectionPanelNav activeTabIdx={activeTabIdx} />
          {children}
        </div>
      </div>
    </div>
  );
}
