import {
  FAQ,
  Feedback,
  Portfolio,
  HeroSection,
  Features,
  Contects_Form,
  Work,
} from "../components";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="outer">
        <h2 className="heading">Key Features</h2>
        <div className="subHeading">
          Discover the powerful features of our expense tracker web app.
        </div>
        <Features />
      </div>
      <div className="outer">
        <h2 className="heading">How it works</h2>
        <div className="subHeading">
          Learn how to use the expense tracker web app with this step-by-step
          guide.
        </div>
        <Work />
      </div>
      <Portfolio />
      <Feedback />
      <FAQ />
      <Contects_Form />
    </>
  );
}
