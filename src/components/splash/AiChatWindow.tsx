import { css } from "@emotion/react";

import InfoSectionPanel from "@/components/splash/InfoSectionPanel";

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
      <InfoSectionPanel activeTabIdx={2}>

      </InfoSectionPanel>
      <div css={css`
        position: absolute;
        width: 100%;
        height: 15%;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgb(244,208,64);
        background: linear-gradient(0deg, rgba(244,208,64,1) 0%, rgba(147,208,156,1) 36%, rgba(57,208,241,0) 100%);
        opacity: 0.1;
        border-radius: 0 0 8px 8px;
      `}/>
    </div>
  );
}
