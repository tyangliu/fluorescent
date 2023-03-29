import { css } from "@emotion/react";

import { ReactComponent as FlIcon } from "@/assets/icon.svg";

export default function Panel() {
  return (
    <div css={css`
      height: 100%;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
      font-family: "Work Sans", sans-serif;
    `}>
      <FlIcon />
      Test
    </div>
  );
}
