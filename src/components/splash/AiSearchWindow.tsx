import { css } from "@emotion/react";
import { MaterialSymbol } from "react-material-symbols";

import InfoSectionPanel from "@/components/splash/InfoSectionPanel";

export default function AiSearchWindow() {
  return (
    <div css={css`
      flex: 1;
      height: 330px;
      background: #fff;
      border-radius: 8px;
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 1px 6px rgba(0,0,0,0.02);
      position: relative;
      margin-right: 40px;
      min-width: 200px;
    `}>
      <InfoSectionPanel
        activeTabIdx={1}
      >
        <div
          css={css`
            padding: 4px 10px;
            margin: 0 6px;
            background: rgba(242,246,249,1);
            border-radius: 9999px;
            display: flex;
            align-items: center;
          `}
        >
          <MaterialSymbol
            icon="search"
            size={14}
            fill
            color="rgba(24,60,91,0.7)"
            css={css`
              margin-right: 8px;
            `}
          />
          <span className="type-cursor">
            jellyfish facts
          </span>
        </div>
        <div css={css`
          margin: 10px;
        `}>
          {
            [
              "jellyfish don’t produce their own luciferin",
              "Photoproteins, first isolated from jellyfish several decades ago",
            ].map((text, i) => (
              <div
                key={i}
                css={css`
                  border: 1px solid rgba(0,0,0,0.1);
                  box-shadow: 0 0 6px rgba(0,0,0,0.05);
                  border-radius: 3px;
                  margin-bottom: 10px;
                `}
              >
                <div css={css`
                  padding: 6px 10px;
                `}>
                  <span css={css`
                    background: rgba(242,246,249,1);
                  `}>
                    {text}
                  </span>
                </div>
                <div css={css`
                  height: 16px;
                  border-top: 1px solid rgba(0,0,0,0.05);
                  background: #fff;
                `}/>
              </div>
            ))
          }
        </div>
      </InfoSectionPanel>
      <div css={css`
        position: absolute;
        width: 100%;
        height: 30%;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgb(57,208,241);
        background: linear-gradient(0deg, rgba(57,208,241,0.05) 0%, rgba(53,218,165,0.05) 36%, rgba(49,226,103,0) 100%);
        border-radius: 0 0 8px 8px;
      `}/>
    </div>
  );
}
