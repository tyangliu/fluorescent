import { Global, css } from "@emotion/react"
import emotionReset from "emotion-reset";
import { MaterialSymbol } from "react-material-symbols";

import { ReactComponent as FlLogo } from "@/assets/logo.svg";
import { ReactComponent as GithubLogo } from "@/assets/github-mark.svg";
import { ReactComponent as ChromeLogo } from "@/assets/chrome-logo.svg";

function Header() {
  return (
    <div css={css`
      position: fixed;
      width: 100%;
      background: rgb(255,255,255);
      background: linear-gradient(180deg, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%);
      z-index: 100;
    `}>
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
          `}/>
          <div css={css`
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
                `}/>
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

function InstallButton() {
  return (
    <>
      <button css={css`
        outline: none;
        font-family: inherit;
        font-size: inherit;
        padding: 14px 18px;
        border: 1px solid rgba(0,0,0,0);
        box-shadow: 0 1px 3px rgba(0,170,137,0.8);
        border-radius: 9999px;
        display: flex;
        align-items: center;
        color: rgba(255,255,255,1);
        background: rgba(0,170,137,1);
        position: relative;
      `}>
        <div css={css`
          position: absolute;
          background: rgba(255,255,255,1);
          width: 30px;
          height: 30px;
          left: 9px;
          border-radius: 9999px;
        `}/>
        <ChromeLogo css={css`
          position: absolute;
          width: auto;
          height: 24px;
          z-index: 1;
          left: 12px;
        `}/>
        <span css={css`
          display: block;
          margin-left: 30px;
          font-weight: bold;
        `}>
          + Add fluorescent to Chrome
        </span>
      </button>
      <div css={css`
        margin: 16px 0;
        text-align: center;
      `}>
        Or go to interactive demo
      </div>
    </>
  );
}

function Hero() {
  return (
    <div css={css`
      height: 100vh;
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      justify-content: space-between;
      position: relative;
      overflow-x: hidden;
    `}>
      <div css={css`
        width: 100%;
        height: 80px;
      `}/>
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
          `}>
            <span css={css`
              background: rgba(49,226,103,0.5);
              border-radius: 3px;
              padding: 0 4px;
            `}>
              Highlight, annotate, and inquire
            </span>
            &nbsp;the web.
          </h1>
          <h2 css={css`
            text-align: center;
            margin-bottom: 0.5em;
          `}>
            With a sprinkling of AI 💡😊
          </h2>
          <div css={css`
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 36px;
          `}>
            <div css={css`
              border-radius: 10px 10px 0 0;
              border: 1px solid rgba(0,0,0,0.1);
              max-width: 700px;
              width: 100%;
              height: 320px;
              box-shadow: 0 -1px 6px rgba(0,0,0,0.05);
              background: #fff;
              position: relative;
            `}>
              <div css={css`
                width: 100%;
                height: 60%;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -1px;
                margin: auto;
                overflow: hidden;
                transform: scale(2.5, 1);
                z-index: -1;
              `}>
                <div css={css`
                  width: 600px;
                  height: 600px;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  margin: auto;
                  background: rgb(57,208,241);
                  background: radial-gradient(circle, rgba(57,208,241,1) 30%, rgba(49,226,103,1) 45%, rgba(244,208,64,1) 58%, rgba(255,255,255,1) 72%);
                  opacity: 0.25;
                `}/>
              </div>
            </div>
          </div>
          <div css={css`
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

export default function App() {
  return (
    <>
      <Global styles={css`
        ${emotionReset}

        body, html {
          font-family: "Work Sans", sans-serif;
          font-size: 14px;
          line-height: 1.5rem;
          color: rgba(24,60,91,1);
        }

        * {
          box-sizing: border-box;
        }

        h1, h2 {
          font-family: "Lora", serif;
          font-weight: bold;
        }

        h1 {
          font-size: 2.5rem;
          line-height: 3rem;
        }

        h2 {
          font-size: 1.8rem;
          line-height: 3rem;
        }

        h3 {
          font-size: 1.2rem;
        }

        p {
          line-height: 1.5rem;
        }
      `}/>
      <Header />
      <Hero />
      <div css={css`
        display: flex;
        height: 250px;
        margin: 100px 0;
      `}>
        <section css={css`
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
        `}>
          <div css={css`
            margin: 0 20px;
            text-align: center;
          `}>
            <h2>Semantically search and converse with AI</h2>
          </div>
        </section>
      </div>
      <div css={css`
        display: flex;
        height: 250px;
        margin: 100px 0;
      `}>
        <section css={css`
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
        `}>
          <div css={css`
            margin: 0 20px;
            text-align: center;
          `}>
            <h2>Organize your notes</h2>
          </div>
        </section>
      </div>
      <div css={css`
        display: flex;
        height: 250px;
        margin: 100px 0;
      `}>
        <section css={css`
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
        `}>
          <div css={css`
            margin: 0 20px;
            text-align: center;
          `}>
            <h2>Local by default / ☁️ power if you'd like</h2>
          </div>
        </section>
      </div>
      <div css={css`
        display: flex;
        background: rgb(57,208,241);
        background: linear-gradient(0deg, rgba(57,208,241,0.2) 0%, rgba(49,226,103,0.2) 39%, rgba(244,208,64,0.2) 71%, rgba(255,255,255,0) 100%);
      `}>
        <section css={css`
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
        `}>
          <div css={css`
            margin: 0 20px;
            padding: 30px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
          `}>
            <h2 css={css`
              margin-bottom: 1rem;
            `}>
              Ready to highlight?
            </h2>
            <InstallButton />
          </div>
        </section>
      </div>
    </>
  );
}
