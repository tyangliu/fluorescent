import React from "react";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";
import { ReactComponent as FlLogo } from "@/assets/logo.svg";
import { ReactComponent as SearchIcon } from "@material-design-icons/svg/round/search.svg";
import { ReactComponent as SettingsIcon } from "@material-design-icons/svg/round/settings.svg";
import { ReactComponent as CloudUploadIcon } from "@material-design-icons/svg/round/cloud_upload.svg";
import { ReactComponent as AddIcon } from "@material-design-icons/svg/round/add.svg";
import { ReactComponent as TuneIcon } from "@material-design-icons/svg/round/tune.svg";
import { ReactComponent as ExpandMoreIcon } from "@material-design-icons/svg/round/expand_more.svg";
import { ReactComponent as ExpandLessIcon } from "@material-design-icons/svg/round/expand_less.svg";
import { ReactComponent as MoreVertIcon } from "@material-design-icons/svg/round/more_vert.svg";
import { ReactComponent as EditIcon } from "@material-design-icons/svg/round/edit.svg";
import { ReactComponent as ArrowUpwardIcon } from "@material-design-icons/svg/round/arrow_upward.svg";

interface FlexContainerProps {
  type?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

function FlexContainer({ type: El = "div", className, children }: FlexContainerProps) {
  return (
    <El css={css`
    `}>
      <div css={css`
        margin: 0 30px;
      `}>
        <div
          css={css`
            max-width: 1220px;
            width: 100%;
            margin: 0 auto;
            padding: 16px 0;
            display: flex;
          `}
          className={className}
        >
          {children}
        </div>
      </div>
    </El>
  );
}

function Header() {
  return (
    <FlexContainer type="header" css={css`
      align-items: center;
    `}>
      <div css={css`
        width: 18%;
        min-width: 140px;
        height: 38px;
        margin-right: 20px;
      `}>
        <FlLogo css={css`
          width: 140px;
        `}/>
      </div>

      <div css={css`
        position: relative;
        flex: 1;
      `}>
        <input
          type="text"
          placeholder="Search for annotations"
          css={css`
            background: #f2f6f9;
            border-radius: 999px;
            padding: 10px 20px 10px 38px;
            width: 100%;
          `}
        />
        <SearchIcon css={css`
          fill: rgba(24,60,91,1);
          position: absolute;
          margin: auto;
          top: 0;
          left: 12px;
          bottom: 0;
          width: 18px;
          height: 18px;
        `}/>
      </div>

      <div css={css`
        width: 18%;
        min-width: 140px;
        margin-left: 20px;
        display: flex;
        justify-content: flex-end;
      `}>
        <CloudUploadIcon css={css`
          fill: rgba(24,60,91,1);
          width: 18px;
          height: 18px;
          margin-right: 18px;
        `}/>
        <SettingsIcon css={css`
          fill: rgba(24,60,91,1);
          width: 18px;
          height: 18px;
        `}/>
      </div>
    </FlexContainer>
  );
}

function FolderList() {
  return (
    <>
      <ul className="folder-list">
        <Global styles={css`
          .folder-list li {
            display: flex;
            align-items: center;
            position: relative;
          }

          .folder-list li > span {
            padding: 10px 0;
            display: block;
          }
        `}/>
        <li css={css`
          font-weight: bold;
        `}>
          <div css={css`
            width: 4px;
            height: 80%;
            background: rgb(24,60,91);
            position: absolute;
            border-radius: 9999px;
            left: -13px;
          `}/>

          <span>All Notes</span>
        </li>
        <li>
          <span>Courses</span>
        </li>
        <li>
          <span>News</span>
        </li>
        <li>
          <span>Fun</span>
        </li>
      </ul>
      <button css={css`
        padding: 10px 0;
        color: rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        position: relative;
      `}>
        <AddIcon css={css`
          fill: rgba(0,0,0,0.4);
          width: 18px;
          height: 18px;
          position: absolute;
          left: -20px;
        `}/>
        <span>
          New Folder
        </span>
      </button>
    </>
  );
}

function FilterMenu() {
  return (
    <section css={css`
      border-top: 1px solid rgba(0,0,0,0.2);
      margin-bottom: 28px;
    `}>
      <ul
        className="filter-list"
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Global styles={css`
          .filter-list li {
            flex: 1;

            &:not(:last-child) {
              margin-right: 20px;
            }
          }

          .filter-option-list {
            margin-top: 10px;
          }

          .filter-option-list li {
            padding: 10px 0;
          }
        `}/>
        <li>
          <div css={css`;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}>
            <span css={css`
              display: block;
              padding: 15px 0;
            `}>
              Tags
            </span>
            <ExpandMoreIcon css={css`
              fill: rgba(24,60,91,1);
              width: 18px;
              height: 18px;
            `}/>
          </div>
        </li>
        <li>
          <div css={css`
            padding: 15px 0;
            border-bottom: 1px solid rgba(0,0,0,0.2);
          `}>
            Date
          </div>
          <ul className="filter-option-list">
            <li css={css`font-weight: bold;`}>All</li>
            <li>Last Week</li>
            <li>Last Month</li>
            <li css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}>
              <span>Custom</span>
              <ExpandMoreIcon css={css`
                fill: rgba(24,60,91,1);
                width: 18px;
                height: 18px;
              `}/>
            </li>
          </ul>
        </li>
        <li>
          <div css={css`
            padding: 15px 0;
            border-bottom: 1px solid rgba(0,0,0,0.2);
          `}>
            Sort By
          </div>
          <ul className="filter-option-list">
            <li css={css`font-weight: bold;`}>Relevance</li>
            <li>Date</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

function NoteNav() {
  return (
    <>
      <nav css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 28px;
      `}>
        <ul
          className="note-nav-list"
          css={css`
            display: flex;
          `}>
          <Global styles={css`
            .note-nav-list li {
              margin-right: 20px;
              padding: 10px 0;
              position: relative;
            }
          `}/>
          <li css={css`
            font-weight: bold;
          `}>
            <div css={css`
              position: absolute;
              height: 4px;
              width: 26px;
              background: rgb(24,60,91);
              border-radius: 9999px;
              left: 0;
              right: 0;
              margin: auto;
              bottom: -5px;
            `}/>
            Notes
          </li>
          <li>
            Pages
          </li>
        </ul>
        <button css={css`
          display: flex;
          align-items: center;
        `}>
          <TuneIcon css={css`
            fill: rgba(24,60,91,1);
            width: 18px;
            height: 18px;
            margin-right: 8px;
          `}/>
          <span>Filters</span>
        </button>
      </nav>
      {/*<FilterMenu/>*/}
    </>
  );
}

function Note() {
  return (
    <>
      <div css={css`
        padding: 16px;
        border-top: 1px solid rgba(0,0,0,0.1);
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
          padding: 0 16px;
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

function PageItem() {
  return (
    <li css={css`
      border-radius: 4px;
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    `}>
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      `}>
        <div css={css`
          padding: 14px 16px 16px;
        `}>
          <h2 css={css`
            font-family: "Lora", serif;
            font-size: 1.3em;
            font-weight: bold;
            margin-bottom: 0.5em;
            line-height: 1.2em;
          `}>
            Marshall, the iconic amp manufacturer, is being acquired by Marshall speaker maker Zound
          </h2>
          <div css={css`
            font-size: 0.9em;
          `}>
            theverge.com
          </div>
        </div>
        <button css={css`
          display: flex;
          align-items: center;
          margin: 16px;
        `}>
          <MoreVertIcon css={css`
            fill: rgba(24,60,91,1);
            width: 18px;
            height: 18px;
            margin-left: 8px;
          `}/>
        </button>
      </div>
      <Note />
      <Note />
      <div css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(234,240,244,1);
        border-top: 2px solid rgba(0,0,0,0.05);
        opacity: 0.5;
        font-size: 0.9em;
        padding: 4px 16px;
      `}>
        14 more notes
      </div>
    </li>
  );
}

function NoteItem() {
  return (
    <li css={css`
      border-radius: 4px;
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    `}>
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(234,240,244,1);
        border-bottom: 1px solid rgba(0,0,0,0.05);
      `}>
        <p css={css`
          opacity: 0.5;
          margin: 0 16px;
          font-size: 0.9em;
          font-weight: bold;
          line-height: 1em;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}>
          Marshall, the iconic amp manufacturer, is being acquired by Marshall speaker maker Zound
        </p>
        <p css={css`
          opacity: 0.5;
          font-size: 0.9em;
          line-height: 1em;
          padding-left: 16px;
          border-left: 1px solid rgba(0,0,0,0.3);
          flex: 1;
        `}>
          theverge.com
        </p>
        <button css={css`
          display: flex;
          align-items: center;
          margin: 6px 16px;
        `}>
          <MoreVertIcon css={css`
            fill: rgba(24,60,91,1);
            width: 18px;
            height: 18px;
            margin-left: 8px;
          `}/>
        </button>
      </div>
      <Note />
    </li>
  );
}

function NoteList() {
  return (
    <ul className="note-list" css={css`
    `}>
      <Global styles={css`
        .note-list li {
          margin-bottom: 16px;
        }
      `}/>
      <PageItem/>
      <NoteItem/>
    </ul>
  );
}

function PageIndex({index = 0, active = false}) {
  return (
    <li css={css`
      display: flex;
      align-items: center;
      padding: 6px 0;
      margin-bottom: 24px;
    `}>
      <div css={css`
        border-radius: 9999px;
        width: 20px;
        height: 20px;
        background: ${active ? "rgba(24,60,91,1)" : "#d1dde6"};
        background-clip:content-box;
        border: 3px solid rgba(24,60,91,${active ? "1" : "0"});
        margin-right: 10px;
        padding: ${active? "3px" : "1px"};
      `}/>
      <div css={css`
        font-weight: ${active ? "bold" : "normal"};
        opacity: ${active ? "1" : "0.3"};
      `}>
        {active ? "Page ": ""}{index + 1}
      </div>
    </li>
  );
}

function PageTop() {
  return (
    <li css={css`
      display: flex;
      align-items: center;
      padding: 9px 0;
      margin-bottom: 37px;
      position: relative;
    `}>
      <div css={css`
        border-radius: 9999px;
        position: absolute;
        background: #fff;
        left: -2px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.15);
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
        <ArrowUpwardIcon css={css`
          fill: rgba(24,60,91,0.5);
          width: 18px;
          height: 18px;
        `}/>
      </div>
      <div css={css`
        margin-left: 30px;
        font-style: italic;
        opacity: 0.6;
      `}>
        Go to top
      </div>
    </li>
  );
}

function PageThread() {
  return (
    <div css={css`
      position: relative;
      min-height: 36px;
      margin-left: 42px;
      padding-bottom: 8px;
    `}>
      <div css={css`
        position: absolute;
        top: 8px;
        left: 8px;
        width: 4px;
        height: 100%;
        border-radius: 9999px;
        background: #f2f6f9;
        z-index: -1;
      `}/>
      <ul className="page-thread-list" css={css`
      `}>
        <PageTop />
        <PageIndex index={0} active={true}/>
        <PageIndex index={1} active={false}/>
        <PageIndex index={2} active={false}/>
        <PageIndex index={3} active={false}/>
        <PageIndex index={4} active={false}/>
        <PageIndex index={5} active={false}/>
      </ul>
    </div>
  );
}

function Main() {
  return (
    <FlexContainer type="main">
      <aside css={css`
        width: 18%;
        min-width: 140px;
        margin-right: 20px;
      `}>
        <FolderList />
      </aside>
      <section css={css`
        flex: 1;
        min-width: 0;
      `}>
        <NoteNav />
        <NoteList />
      </section>
      <aside css={css`
        width: 18%;
        min-width: 140px;
        margin-left: 20px;
      `}>
        <PageThread />
      </aside>
    </FlexContainer>
  );
}

export default function App() {
  return (
    <div css={css`
      font-family: "Work Sans", sans-serif;
      font-size: 14px;
      color: rgb(24,60,91);
    `}>
      <Global styles={css`
        ${emotionReset}

        * {
          box-sizing: border-box;
        }

        input, button {
          all: initial;
          color: inherit;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          box-sizing: border-box;
        }
      `}/>
      <Header />
      <Main />
    </div>
  );
}
