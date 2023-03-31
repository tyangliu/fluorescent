import { css } from "@emotion/react";

export default function ActionButton({className = "", children}: {className?: string, children: React.ReactNode}) {
  return (
    <button
      className={className}
      css={css`
        background: none;
        border: none;
        height: 100%;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {children}
    </button>
  );
}
