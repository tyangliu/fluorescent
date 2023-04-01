import { css } from "@emotion/react";

import InstallButton from "@/components/splash/InstallButton";

export default function Footer() {
  return (
    <footer css={css`
      display: flex;
      background: rgb(244,208,64);
      background: linear-gradient(0deg, rgba(244,208,64,0.2) 0%, rgba(49,226,103,0.2) 39%, rgba(57,208,241,0.2) 61%, rgba(255,255,255,0) 100%);
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
    </footer>
  );
}
