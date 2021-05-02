import React from "react";
import Button from "../common/atoms/Button";
import MaxWidth from "../common/atoms/MaxWidth";
import Paragraph from "../common/atoms/Paragraph";
import Section from "../common/atoms/Section";
import TextHero from "../common/atoms/TextHero";
import styles from "./HeroHome.module.css";
import Link from "next/link";

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
                <Link href="/signup">
                  <a>
                    <Button>Start building the future</Button>
                  </a>
                </Link>
                <Link href="/signup">
                  <a>
                    <Button style="inverted">I am a non-profit</Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="mobile-hidden flex relative sm:-right-0 flex-0 w-80">
              <img
                className={"origin-center " + styles["animate-levitate"]}
                src="assets/illustrations/hero-world.svg"
                alt="A woman coding to change the world"
              />
            </div>
            <div className="w-80 my-10 sm:hidden">
              <img
                src="assets/illustrations/undraw_spread_love_r9jb.svg"
                alt="a man and a woman connected with love"
              />
            </div>
          </div>
        </MaxWidth>
      </Section>
    </div>
  );
}
export default HeroHome;
