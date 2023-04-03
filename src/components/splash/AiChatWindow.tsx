import { css } from "@emotion/react";
import { MaterialSymbol } from "react-material-symbols";

import InfoSectionPanel from "@/components/splash/InfoSectionPanel";

function RecvChatMessage() {
  return (
    <div css={css`
      margin: 10px;
      display: flex;
      align-items: flex-start;
    `}>
      <div css={css`
        width: 26px;
        height: 26px;
        border-radius: 9999px;
        background: rgba(242,246,249,1);
        margin-right: 10px;
        margin-top: 4px;
      `}/>
      <div css={css`
        padding: 10px;
        flex: 1;
        border-radius: 10px;
        background: #fff;
        border: 1px solid rgba(0,0,0,0.1);
      `}>
        According to this article, animals such as jellyfish glow to:
        <ul css={css`
          margin-top: 4px;
        `}>
          {
            ["Attract mates", "Detect and lure prey", "Camouflage"].map((text, i) => (
              <li key={i} css={css`
                list-style: disc;
                margin-left: 10px;
              `}>
                <span css={css`
                `}>
                  {text}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

function SendChatMessage() {
  return (
    <div css={css`
      margin: 10px 10px 16px 10px;
      display: flex;
      align-items: flex-end;
    `}>
      <div css={css`
        padding: 10px;
        flex: 1;
        margin-left: 60px;
        border-radius: 10px;
        background: rgba(242,246,249,1);
      `}>
        Why do jellyfish glow?
      </div>
    </div>
  );
}

export default function AiChatWindow() {
  return (
    <div css={css`
      flex: 1;
      height: 330px;
      background: #fff;
      border-radius: 8px;
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 1px 6px rgba(0,0,0,0.02);
      position: relative;
      min-width: 200px;
    `}>
      <InfoSectionPanel
        activeTabIdx={2}
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div css={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}>
          <div css={css`
            flex: 1;
          `}>
            <SendChatMessage/>
            <RecvChatMessage/>
          </div>
          <div css={css`
            background: rgba(242,246,249,1);
            padding: 6px 10px;
            border-radius: 9999px;
            margin: 8px 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}>
            <span className="type-cursor">
              Ask me about this page&hellip;
            </span>
            <MaterialSymbol
              icon="send"
              size={14}
              fill
              color="rgba(24,60,91,0.7)"
              css={css`
              `}
            />
          </div>
        </div>
      </InfoSectionPanel>
      <div css={css`
        position: absolute;
        width: 100%;
        height: 20%;
        top: 0;
        left: 0;
        right: 0;
        background: rgb(57,208,241);
        background: linear-gradient(0deg, rgba(49,226,103,0) 0%, rgba(53,218,165,0.05) 36%, rgba(57,208,241,0.05) 100%);
        border-radius: 0 0 8px 8px;
      `}/>
    </div>
  );
}
