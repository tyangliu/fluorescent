import { Global, css } from "@emotion/react"
import Panel from "@/components/content/Panel";
import emotionReset from "emotion-reset";

function App() {
  return (
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
        }
      `}/>
      <Panel
        css={css`
        `}
      />
    </div>
  )
}

export default App
