import { css } from "@emotion/react";
import { ReactComponent as MoreVertIcon } from "@material-design-icons/svg/round/more_vert.svg";
import { ReactComponent as EditIcon } from "@material-design-icons/svg/round/edit.svg";

export default function Note() {
  return (
    <>
      <div css={css`
        padding: 16px;
        line-height: 1.5em;
        background: rgb(52,227,101, 0.15);
      `}>
        <span css={css`
          background: rgb(52,227,101, 0.35);
        `}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, asperiores atque autem
          consequuntur cumque delectus deserunt dignissimos doloremque doloribus ducimus earum eius enim error
        </span>
      </div>
      <div css={css`
        border-top: 1px solid rgba(0,0,0,0.1);
        line-height: 1.5em;
        position: relative;
      `}>
        <div css={css`
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid rgba(237,237,237,1);
          top: -10px;
          left: 16px;
        `}/>
        <div css={css`
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #fff;
          top: -8.5px;
          left: 16px;
        `}/>
        <p css={css`
          margin: 16px;
        `}>
          Just taking down a note
        </p>

        <div css={css`
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid rgba(0,0,0,0.1);
          padding: 0 8px 0 16px;
        `}>
          <button css={css`
            display: flex;
            align-items: center;
            padding: 6px 0;
            margin-right: 10px;
          `}>
            <EditIcon css={css`
              fill: rgba(24,60,91,1);
              width: 18px;
              height: 18px;
            `}/>
          </button>
          <button css={css`
            display: flex;
            align-items: center;
            padding: 6px 0;
          `}>
            <MoreVertIcon css={css`
              fill: rgba(24,60,91,1);
              width: 18px;
              height: 18px;
            `}/>
          </button>
        </div>
      </div>
    </>
  );
}
