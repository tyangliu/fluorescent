import { Global, css } from "@emotion/react"
import emotionReset from "emotion-reset";

import Header from "@/components/splash/Header";
import HeroSection from "@/components/splash/HeroSection";
import OrganizeSection from "@/components/splash/OrganizeSection";
import AiSection from "@/components/splash/AiSection";
import CloudSection from "@/components/splash/CloudSection";
import Footer from "@/components/splash/Footer";

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
          font-size: 1.66rem;
          line-height: 2.3rem;
        }

        h3 {
          font-size: 1.2rem;
        }

        p {
          line-height: 1.5rem;
        }

        a {
          color: rgba(0,170,137,1);
          text-decoration: underline;
        }
      `} />
      <Header />
      <HeroSection />
      <OrganizeSection />
      <AiSection />
      <CloudSection />
      <Footer />
    </>
  );
}
