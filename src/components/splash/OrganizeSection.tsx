import { css } from "@emotion/react";

import OrganizeWindow from "@/components/splash/OrganizeWindow";

export default function OrganizeSection() {
  return (
    <div css={css`
      display: flex;
      margin: 160px 0;
    `}>
      <section css={css`
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
      `}>
        <div css={css`
          margin: 0 20px;
          display: flex;
          align-items: center;
        `}>
          <div css={css`
            padding: 20px;
            border-radius: 8px;
            border: 1px solid rgba(0,0,0,0.1);
            box-shadow: 0 1px 6px rgba(0,0,0,0.05);
            max-width: 360px;
            position: relative;
            background: #fff;
          `}>
            <div css={css`
              filter: blur(3px);
              position: absolute;
              width: 0;
              height: 0;
              border-left: 14px solid transparent;
              border-right: 14px solid rgba(0,0,0,0.05);
              border-bottom: 14px solid transparent;
              right: -9.5px;
              top: 24px;
              transform: rotate(45deg);
              z-index: -1;
            `}/>
            <div css={css`
              position: absolute;
              width: 0;
              height: 0;
              border-left: 14px solid transparent;
              border-right: 14px solid rgba(234,234,234,1);
              border-bottom: 14px solid transparent;
              right: -9.5px;
              top: 24px;
              transform: rotate(45deg);
              z-index: -1;
            `}/>
            <div css={css`
              position: absolute;
              width: 0;
              height: 0;
              border-left: 14px solid transparent;
              border-right: 14px solid #fff;
              border-bottom: 14px solid transparent;
              right: -8.5px;
              top: 24px;
              transform: rotate(45deg);
              z-index: 1;
            `}/>
            <h2 css={css`
              margin-bottom: 1rem;
              position: relative;
            `}>
              <div css={css`
                position: absolute;
                width: 4px;
                height: 100%;
                background: rgba(24,60,91,1);
                border-radius: 9999px;
                left: -22.5px;
                top: 0;
              `}/>
              Organize and find notes effortlessly
            </h2>
            <p css={css`
            `}>
              Find relevant notes with ease through search, folders, and tags whether you have 10 or 10,000 notes.
            </p>
          </div>
          <div css={css`
            flex: 1;
            margin-left: -40px;
            display: flex;
            align-items: center;
            z-index: -2;
          `}>
            <OrganizeWindow />
          </div>
        </div>
      </section>
    </div>
  );
}
