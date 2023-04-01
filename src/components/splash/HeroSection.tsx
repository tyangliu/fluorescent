import { css } from "@emotion/react";
import { MaterialSymbol } from "react-material-symbols";

import ShowcaseWindow from "@/components/splash/ShowcaseWindow";
import InstallButton from "@/components/splash/InstallButton";

export default function HeroSection() {
  return (
    <div css={css`
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
      position: relative;
      overflow-x: hidden;
    `}>
      <div css={css`
        width: 100%;
        height: 80px;
      `} />
      <section css={css`
        width: 100%;
        max-width: 1160px;
        margin: 0 auto;
      `}>
        <div css={css`
          margin: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100%;
        `}>
          <h1 css={css`
            text-align: center;
            margin-bottom: 0.5rem;
            margin-top: 4rem;
          `}>
            <span css={css`
              background: rgba(49,226,103,0.5);
              border-radius: 5px;
              padding: 0 4px;
            `}>
              Highlight
            </span>
            ,&nbsp;annotate, and inquire the web.
          </h1>
          <h2 css={css`
            text-align: center;
            margin-bottom: 4rem;
            font-family: 'Work Sans', sans-serif;
            font-weight: normal;
          `}>
            <span css={css`
            `}>
              With a sprinkling of AI
            </span>
            &nbsp;💡
          </h2>
          <div css={css`
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 36px;
          `}>
            <ShowcaseWindow />
          </div>
          <div css={css`
            margin-top: 30px;
          `}>
            <InstallButton />
          </div>
        </div>
      </section>
      <div css={css`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
      `}>
        <div css={css`
          padding: 20px;
          display: flex;
          align-items: center;
        `}>
          <span css={css`
            display: block;
            margin-right: 8px;
          `}>
            Learn More
          </span>
          <MaterialSymbol
            icon="arrow_downward"
            size={18}
            fill
            color="rgba(24,60,91,1)"
          />
        </div>
      </div>
    </div>
  );
}
