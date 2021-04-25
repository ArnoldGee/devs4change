import React from "react";
import Section from "../common/atoms/Section";
import MaxWidth from "../common/atoms/MaxWidth";
import TextH2 from "../common/atoms/TextH2";
import ContributorCard, { ContributorCardProps } from "./ContributorCard";

interface ContributorsSectionProps {
  contributors: ContributorCardProps[];
}

const ContributorsSection = ({ contributors }: ContributorsSectionProps): JSX.Element => (
  <div className="bg-green text-white pt-12 pb-12">
    <Section>
      <MaxWidth>
        <TextH2 className="text-center">Built for developers, by developers</TextH2>
        <ul className="pt-10 flex flex-wrap justify-center items-stretch gap-16">
          {contributors.map((contributor) => (
            <ContributorCard key={contributor.name} {...contributor} />
          ))}
        </ul>
      </MaxWidth>
    </Section>
  </div>
);

export default ContributorsSection;
