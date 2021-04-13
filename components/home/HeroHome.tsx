import React from "react";
import Button from "../atoms/Button";
import MaxWidth from "../atoms/MaxWidth";
import Paragraph from "../atoms/Paragraph";
import Section from "../atoms/Section";
import TextHero from "../atoms/TextHero";

function HeroHome(): JSX.Element {
  return (
    <Section>
      <MaxWidth>
        <div className="h-140 flex">
          <div className="flex-1 flex flex-col justify-center">
            <TextHero>
              Real projects for your portfolio.
              <br />
              Real impact to the world.
            </TextHero>
            <Paragraph className="pt-12">
              Level up your skills as a developer
              <br />
              by building real websites and projects for non-profits.
            </Paragraph>
            <div className="flex space-x-5 pt-5">
              <Button>Start building the future</Button>
              <Button style="inverted">I am a non-profit</Button>
            </div>
          </div>
          <div className="flex-0 w-80 flex">
            <img
              className="transform scale-125 origin-center animate-levitate transition"
              src="assets/hero-world.svg"
              alt="A woman coding to change the world"
            />
          </div>
        </div>
      </MaxWidth>
    </Section>
  );
}
export default HeroHome;
