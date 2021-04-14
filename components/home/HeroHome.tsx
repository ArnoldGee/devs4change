import React from "react";
import cn from "classnames";
import Button from "../atoms/Button";
import MaxWidth from "../atoms/MaxWidth";
import Paragraph from "../atoms/Paragraph";
import Section from "../atoms/Section";
import TextHero from "../atoms/TextHero";
import styles from "./HeroHome.module.css";

function HeroHome(): JSX.Element {
  return (
    <div className="relative overflow-hidden">
      <Section>
        <MaxWidth>
          <div className="h-140 flex">
            <div className="py-10 flex-1 flex flex-col sm:justify-center">
              <TextHero>
                Real projects for your portfolio.
                <br />
                Real impact to the world.
              </TextHero>
              <Paragraph className="pt-6 sm:pt-12">
                Level up your skills as a developer
                <br />
                by building real websites and projects for non-profits.
              </Paragraph>
              <div className="flex relative z-10 flex-col sm:flex-row items-start sm:items-center gap-5 pt-5">
                <Button>Start building the future</Button>
                <Button style="inverted">I am a non-profit</Button>
              </div>
            </div>
            <div className="mobile-hidden flex relative sm:-right-0 flex-0 w-80">
              <img
                className={cn("transform origin-center transition", styles["animate-levitate"])}
                src="assets/illustrations/hero-world.svg"
                alt="A woman coding to change the world"
              />
            </div>
          </div>
        </MaxWidth>
      </Section>
    </div>
  );
}
export default HeroHome;
