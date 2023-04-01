import { css } from "@emotion/react";

export default function CloudSection() {
  return (
    <div css={css`
      display: flex;
      margin: 240px 0 160px;
    `}>
      <section css={css`
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
      `}>
        <div css={css`
          margin: 0 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}>
          <h2 css={css`
            margin-bottom: 1.2rem;
          `}>
            Local by default, ☁️ power if you'd like
          </h2>
          <p css={css`

          `}>
            By default, your notes are stored and processed on-device.
          </p>
          <p css={css`

          `}>
            Cloud features enhance your experience, but only if you opt-in.
          </p>
        </div>
        <div css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 18px 0;
        `}>
          <div css={css`
            text-transform: uppercase;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 1px;
          `}>
            Cloud features
          </div>
          <div css={css`
            padding: 4px;
            border-radius: 9999px;
            background: rgba(0,170,137,1);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
          `}>
            <div css={css`
              padding: 0 8px;
              color: #fff;
              font-size: 12px;
              text-transform: uppercase;
              font-weight: bold;
              letter-spacing: 1px;
            `}>
              On
            </div>
            <div css={css`
              background: #fff;
              width: 20px;
              height: 20px;
              border-radius: 9999px;
            `}/>
          </div>
        </div>
        <div css={css`
        `}>
        </div>
      </section>
    </div>
  );
}
