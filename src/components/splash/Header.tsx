import { Global, css } from "@emotion/react";

import { ReactComponent as FlLogo } from "@/assets/logo.svg";
import { ReactComponent as GithubLogo } from "@/assets/github-mark.svg";

export default function Header() {
  return (
    <div css={css`
      position: fixed;
      width: 100%;
      background: rgb(255,255,255);
      background: linear-gradient(180deg, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%);
      z-index: 100;
    `}>
      <Global styles={css`
        .splash-nav a {
          color: rgba(24,60,91,1);
          text-decoration: none;
        }
      `}/>
      <header css={css`
        max-width: 1160px;
        width: 100%;
        margin: 0 auto;
      `}>
        <div css={css`
          margin: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}>
          <FlLogo css={css`
            width: auto;
            height: 40px;
          `} />
          <div className="splash-nav" css={css`
            display: flex;
            align-items: center;
          `}>
            <a css={css`
              margin-right: 30px;
            `}>
              Demo
            </a>
            <a css={css`
              margin-right: 30px;
            `}>
              About
            </a>
            <div css={css`
            `}>
              <a css={css`
                display: flex;
                align-items: center;
              `}>
                <GithubLogo css={css`
                  width: auto;
                  height: 20px;
                `} />
                <div css={css`
                  margin-left: 8px;
                `}>
                  Source
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
