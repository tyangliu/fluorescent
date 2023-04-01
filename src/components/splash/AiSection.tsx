import { css } from "@emotion/react";

export default function AiSection() {
  return (
    <div css={css`
      display: flex;
      height: 250px;
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
            flex: 1;
            height: 330px;
            background: #fff;
            margin-right: -40px;
            border-radius: 8px;
            border: 1px solid rgba(0,0,0,0.1);
            box-shadow: 0 1px 6px rgba(0,0,0,0.02);
            z-index: -1;
            position: relative;
          `}>
            <div css={css`
              position: absolute;
              width: 100%;
              height: 30%;
              bottom: 0;
              left: 0;
              right: 0;
              background: rgb(57,208,241);
              background: linear-gradient(0deg, rgba(57,208,241,1) 0%, rgba(53,218,165,1) 36%, rgba(49,226,103,0) 100%);
              opacity: 0.1;
            `}/>
          </div>
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
              border-right: 14px solid transparent;
              border-left: 14px solid rgba(0,0,0,0.05);
              border-bottom: 14px solid transparent;
              left: -9.5px;
              top: 24px;
              transform: rotate(-45deg);
              z-index: -1;
            `}/>
            <div css={css`
              position: absolute;
              width: 0;
              height: 0;
              border-right: 14px solid transparent;
              border-left: 14px solid rgba(234,234,234,1);
              border-bottom: 14px solid transparent;
              left: -9.5px;
              top: 24px;
              transform: rotate(-45deg);
              z-index: -1;
            `}/>
            <div css={css`
              position: absolute;
              width: 0;
              height: 0;
              border-right: 14px solid transparent;
              border-left: 14px solid #fff;
              border-bottom: 14px solid transparent;
              left: -8.5px;
              top: 24px;
              transform: rotate(-45deg);
            `}/>
            <h2 css={css`
              margin-bottom: 1.2rem;
              position: relative;
            `}>
              <div css={css`
                position: absolute;
                width: 4px;
                height: 100%;
                background: rgba(24,60,91,1);
                border-radius: 9999px;
                right: -22.5px;
                top: 0;
              `}/>
              Semantically search & converse with AI
            </h2>
            <p>
              Quickly discover and save answers from webpages
              with the help of semantic in-page search
              and conversational AI.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
