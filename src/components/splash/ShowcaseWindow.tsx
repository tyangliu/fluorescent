import { Global, css } from "@emotion/react"
import { MaterialSymbol } from "react-material-symbols";

import { ReactComponent as FlIcon } from "@/assets/icon.svg";

function ShowcaseBackdrop() {
  return (
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
      `} />
    </div>
  );
}

function ShowcasePanelNav() {
  return (
    <div css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    `}>
      <ul
        className="panel-nav-list"
        css={css`
          display: flex;
          align-items: center;
          margin: 0 4px;
        `}
      >
        <Global styles={css`
          .panel-nav-list li {
            margin-right: 6px;
            font-size: 8px;
            padding: 3px 1px;
          }
        `}/>
        <li css={css`
          font-weight: bold;
          position: relative;
        `}>
          <div css={css`
            position: absolute;
            left: 0;
            right: 0;
            bottom: 3px;
            width: 10px;
            height: 2px;
            margin: auto;
            background: rgba(24,60,91,1);
            border-radius: 9999px;
          `}/>
          <span>Notes</span>
        </li>
        <li>Find</li>
        <li>Chat</li>
      </ul>
      <button css={css`
        display: flex;
        align-items: center;
        padding: 4px 2px;
        margin-right: 2px;
        background: none;
        border: none;
        outline: none;
      `}>
        <MaterialSymbol
          icon="settings"
          size={8}
          fill
          color="rgba(24,60,91,1)"
        />
      </button>
    </div>
  );
}

function ShowcasePanelNote({colorIdx = 0}) {
  const color = [
    "49,226,103",
    "244,208,64",
  ][colorIdx];
  return (
    <div css={css`
      font-size: 8px;
      margin: 3px;
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 2px;
      margin-bottom: 6px;
    `}>
      <div css={css`
        width: 100%;
        height: 40px;
        background: rgba(${color},0.15);
        padding: 4px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      `}>
        <div css={css`
          width: 100%;
          height: 100%;
          background: rgba(${color},0.3);
        `}/>
      </div>
      <div css={css`
        height: 4px;
        margin: 4px 4px 1px 4px;
      `}>
        <div css={css`
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.05);
        `}/>
      </div>
      <div css={css`
        height: 4px;
        margin: 0px 4px 4px 4px;
      `}>
        <div css={css`
          width: 50%;
          height: 100%;
          background: rgba(0,0,0,0.05);
        `}/>
      </div>
    </div>
  );
}

function ShowcasePanel() {
  return (
    <div css={css`
      background: rgba(255,255,255,1);
      margin: 10px 10px 0 10px;
      border-radius: 6px 6px 0 0;
      border: 1px solid rgba(0,0,0,0.2);
      border-bottom: none;
      width: 20%;
      min-width: 140px;
    `}>
      <div css={css`
        width: 100%;
        height: 10px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      `}/>
      <div css={css`
        display: flex;
        height: 100%;
      `}>
        <div css={css`
          width: 16px;
          border-right: 1px solid rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        `}>
          <div css={css`
            width: 100%;
            height: 10px;
            margin: 4px 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
          `}>
            <div css={css`
              width: 10px;
              height: 10px;
              background: rgba(49,226,103,0.25);
              border-radius: 9999px;
            `} />
          </div>
          <div css={css`
            width: 100%;
            height: 10px;
            margin: 2px 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
          `}>
            <div css={css`
              width: 10px;
              height: 10px;
              background: rgba(0,0,0,0.05);
              border-radius: 9999px;
            `} />
          </div>
          <div css={css`
            width: 100%;
            height: 10px;
            margin: 2px 0;
            display: flex;
            align-items: center;
            justify-content: center;
          `}>
            <div css={css`
              width: 10px;
              height: 10px;
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
              width: 10px;
              height: 10px;
              background: rgba(244,208,64,1);
              border-radius: 2px;
              margin-bottom: 2px;
              position: relative;
            `} />
            <li css={css`
              width: 10px;
              height: 10px;
              background: rgba(49,226,103,1);
              border-radius: 2px;
              margin-bottom: 2px;
              position: relative;
            `}/>
            <li css={css`
              width: 10px;
              height: 10px;
              background: rgba(57,208,241,1);
              border-radius: 2px;
              position: relative;
            `}>
              <div css={css`
                height: 100%;
                width: 2px;
                position: absolute;
                left: -4px;
                background: inherit;
                border-radius: 9999px;
              `} />
            </li>
          </ul>
        </div>
        <div css={css`
          flex: 1;
        `}>
          <ShowcasePanelNav />
          <ShowcasePanelNote />
          <ShowcasePanelNote colorIdx={1} />
        </div>
      </div>
    </div>
  );
}

function ShowcasePageContentHeader() {
  return (
    <div css={css`
      margin: 10px auto;
      width: 100%;
      max-width: 300px;
      display: flex;
      justify-content: space-between;
    `}>
      <div css={css`
        width: 60px;
        height: 16px;
        margin: 4px 0;
        background: rgba(0,0,0,0.05);
        border-radius: 2px;
      `}/>
      <div>
        <div css={css`
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 4px 0;
        `}>
          <div css={css`
            width: 30px;
            height: 4px;
            background: rgba(0,0,0,0.05);
            border-radius: 2px;
          `} />
          <div css={css`
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: 4px;
          `}>
            <div css={css`
              width: 24px;
              height: 8px;
              background: rgba(2,75,180, 0.3);
              border-radius: 2px;
              margin-left: 2px;
            `} />
            <div css={css`
              width: 22px;
              height: 8px;
              background: rgba(2,75,180, 0.3);
              border-radius: 2px;
              margin-left: 2px;
            `} />
          </div>
          <div css={css`
            display: flex;
            align-items: center;
          `}>
            <div css={css`
              width: 6px;
              height: 6px;
              background: rgba(0,0,0,0.05);
              border-radius: 2px;
              margin-right: 2px;
            `} />
            <div css={css`
              width: 12px;
              height: 6px;
              background: rgba(0,0,0,0.05);
              border-radius: 2px;
            `} />
          </div>
        </div>
        <div css={css`
          display: flex;
          justify-content: flex-end;
        `}>
          <div css={css`
              background: rgba(0,0,0,0.05);
              width: 54px;
              height: 6px;
              margin-right: 2px;
            `} />
          <div css={css`
              background: rgba(0,0,0,0.1);
              width: 16px;
              height: 6px;
              margin-right: 2px;
            `} />
          <div css={css`
              background: rgba(0,0,0,0.05);
              width: 54px;
              height: 6px;
            `} />
          <div />
        </div>
      </div>
    </div>
  );
}

function ShowcasePopover() {
  return (
    <div css={css`
      position: absolute;
      width: 260px;
      top: 20px;
      left: -46px;
      margin: auto;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 0 6px rgba(24,60,91,0.15);
      border: 1px solid rgba(0,0,0,0.1);
    `}>

      <Global styles={css`
        @keyframes cursor-blink {
          0% {
            opacity: 0;
          }
        }

        .showcase-popover-note span::after {
          content: "";
          width: 2px;
          height: 16px;
          background: rgba(24,60,91,0.5);
          display: inline-block;
          position: absolute;
          top: -1px;
          right: -5px;
          animation: cursor-blink 1.5s steps(2) infinite;
        }
      `}/>
      <div css={css`
        padding: 8px 12px;
        font-size: 12px;
        position: relative;
        color: rgba(24,60,91,1);
      `}>
        <div css={css`
          filter: blur(1px);
          position: absolute;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid rgba(0,0,0,0.15);
          top: -8px;
          left: 16px;
          z-index: -1;
        `}/>
        <div css={css`
          position: absolute;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid rgba(237,237,237,1);
          top: -8px;
          left: 16px;
        `}/>
        <div css={css`
          position: absolute;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid #fff;
          top: -6.5px;
          left: 16px;
        `}/>
        <p className="showcase-popover-note">
          Remember to study: what other sea creatures besides jellyfish&nbsp;
          <span css={css`
            position: relative;
          `}>
            glow?
          </span>
        </p>
        <p>
          (<a href="https://www.amnh.org/explore/videos/oceans/jellies-down-deep/how-the-jelly-got-its-glow" target="_blank">Source</a>)
        </p>
      </div>
      <div css={css`
        border-top: 1px solid rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
      `}>
        <div css={css`
          width: 13px;
          height: 13px;
          background: rgba(0,0,0,0.08);
          border-radius: 9999px;
          margin: 0 3px;
        `}/>
        <div css={css`
          width: 13px;
          height: 13px;
          background: rgba(0,0,0,0.08);
          border-radius: 9999px;
          margin: 0 3px 0 0;
        `}/>
        <div css={css`
          width: 13px;
          height: 13px;
          background: rgba(0,0,0,0.08);
          border-radius: 9999px;
          margin: 0 3px 0 0;
        `}/>
        <ul css={css`
          display: flex;
          align-items: center;
          padding: 4px;
          border-left: 1px solid rgba(0,0,0,0.1);
        `}>
          <li css={css`
            width: 14px;
            height: 14px;
            background: rgba(244,208,64,1);
            border-radius: 3px;
            margin-right: 4px;
            position: relative;
          `}/>
          <li css={css`
            width: 14px;
            height: 14px;
            background: rgba(49,226,103,1);
            border-radius: 3px;
            margin-right: 4px;
            position: relative;
          `}/>
          <li css={css`
            width: 14px;
            height: 14px;
            background: rgba(57,208,241,1);
            border-radius: 3px;
            position: relative;
          `}>
            <div css={css`
              width: 100%;
              height: 3px;
              position: absolute;
              bottom: -6px;
              background: inherit;
              border-radius: 9999px;
            `}/>
          </li>
        </ul>
        <div css={css`
          display: flex;
          justify-content: flex-end;
          flex: 1;
          align-items: center;
        `}>
          <MaterialSymbol
            icon="close"
            size={14}
            fill
            color="rgba(24,60,91,1)"
            css={css`
              margin: 0 4px;
            `}
          />
          <MaterialSymbol
            icon="done"
            size={14}
            fill
            color="rgba(24,60,91,1)"
            css={css`
              margin-right: 4px;
            `}
          />
        </div>
      </div>
    </div>
  );
}

function ShowcasePageContentBody() {
  return (
    <div css={css`
      margin: 10px auto;
      width: 100%;
      max-width: 300px;
      display: flex;
      flex-direction: column;
    `}>
      <div css={css`
        font-family: "Lora", serif;
        font-weight: bold;
        color: #000;
        margin-bottom: 14px;
      `}>
        How the Jelly Got Its Glow
      </div>
      <div css={css`
        display: flex;
      `}>
        <div css={css`
        `}>
          <div css={css`
            padding-bottom: 4px;
            padding-right: 6px;
            margin-bottom: 4px;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          `}>

            <div css={css`
              width: 40px;
              height: 10px;
              background: rgba(2,75,180, 0.15);
              border-radius: 3px;
            `} />
          </div>
          <div css={css`
            width: 20px;
            height: 6px;
            background: rgba(0,0,0,0.05);
            border-radius: 2px;
          `} />
        </div>
        <div css={css`
          width: 50%;
          margin-left: 20px;
        `}>
          <div css={css`
            font-size: 5px;
            line-height: 1.5em;
            color: rgba(0,0,0,0.5);
            margin-bottom: 10px;
          `}>
            The deep sea is ruled by darkness. Sunlight does not penetrate much beyond 60 meters (about 200 feet) below the ocean’s surface.&nbsp;
            To see the&nbsp;
            <span css={css`
              background: rgba(57,208,241,0.5);
              position: relative;
            `}>
              animal life, gelatinous or otherwise, that thrives at greater depths
              <ShowcasePopover />
            </span>
            , a submersible vehicle like the ones used by scientists in Monterey Bay comes equipped with powerful lights.&nbps;
            To truly understand the life down there, however, those lights must be turned off.&nbsp;
            That’s when the native lights become visible--the ghostly blue flickers of bioluminescence produced by virtually every organism of the deep.
          </div>
          <div css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 4px;
          `}>
            <div css={css`
              width: 30px;
              height: 20px;
              background: rgba(0,0,0,0.05);
            `} />
          </div>
          <div css={css`
            width: 100px;
            height: 2px;
            background: rgba(0,0,0,0.05);
            margin-bottom: 1px;
          `} />
          <div css={css`
            width: 30px;
            height: 2px;
            background: rgba(0,0,0,0.05);
            margin-bottom: 10px;
          `} />
          <div css={css`
            font-size: 5px;
            line-height: 1.5em;
            color: rgba(0,0,0,0.5);
            margin-bottom: 10px;
          `}>
            “There’s a whole netherworld of the deep sea that we don’t see when we have our lights on,” says Kevin Raskoff,&nbsp;
            a scientist at California State University, Monterey Bay. “And that’s the natural light of the deep sea: bioluminescence.”
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowcasePageContent() {
  return (
    <div css={css`
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0 10px;
    `}>
      <ShowcasePageContentHeader />
      <ShowcasePageContentBody />
    </div>
  );
}

export default function ShowcaseWindow() {
  return (
    <div css={css`
      border-radius: 10px 10px 0 0;
      border: 1px solid rgba(0,0,0,0.1);
      max-width: 700px;
      width: 100%;
      height: 280px;
      box-shadow: 0 -1px 6px rgba(0,0,0,0.05);
      background: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
    `}>
      <ShowcaseBackdrop />
      <div css={css`
        overflow: hidden;
      `}>
        <div css={css`
          width: 100%;
          height: 40px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(24,61,90,0.05);
          background: linear-gradient(0deg, rgba(24,61,90,0.05) 0%, rgba(255,255,255,0) 85%);
        `} />
        <div css={css`
          height: 50px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          padding: 20px 6px 6px 6px;
          display: flex;
          align-items: center;
        `}>
          <div css={css`
            background: rgba(0,0,0,0.05);
            height: 100%;
            flex: 1;
            border-radius: 9999px;
            padding: 4px 10px;
            display: flex;
            align-items: center;
          `}>
            <div css={css`
              width: 30%;
              height: 10px;
              background: rgba(0,0,0,0.1);
              border-radius: 2px;
            `} />
          </div>
          <FlIcon css={css`
            width: 18px;
            height: 18px;
            margin-left: 6px;
          `} />
        </div>
        <div css={css`
          flex: 1;
          display: flex;
        `}>
          <ShowcasePageContent />
          <ShowcasePanel />
        </div>
      </div>
    </div>
  );
}
