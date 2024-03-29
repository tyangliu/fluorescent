import { Global, css } from "@emotion/react"
import Panel from "@/components/content/Panel";
import emotionReset from "emotion-reset";
import Popover from "./components/content/Popover";

function App() {
  return (
    <>
      <div css={css`
        width: 320px;
        margin: 30px;
      `}>
        <Popover />
      </div>
      <div css={css`
        width: 400px;
        height: 100vh;
        position: fixed;
        right: 0;
        top: 0;
        padding: 10px;
      `}>
        <Global styles={css`
          ${emotionReset}

          * {
            box-sizing: border-box;
            outline: none;
          }
        `}/>
        <Panel
          css={css`
          `}
        />
      </div>
    </>
  )
}

export default App
