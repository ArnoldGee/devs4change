import TriadCard, { TriadCardProps } from "./TriadCard";
import Section from "../common/atoms/Section";
import MaxWidth from "../common/atoms/MaxWidth";
import TextH2 from "../common/atoms/TextH2";

export interface TriadProps {
  title: string;
  cards: [TriadCardProps, TriadCardProps, TriadCardProps];
}

const Triad = ({ title, cards }: TriadProps): JSX.Element => (
  <Section>
    <MaxWidth>
      <div className="py-20 space-y-12">
        <TextH2 className="text-brown text-center">{title}</TextH2>
        <ul className="flex flex-wrap justify-center items-stretch gap-16">
          {cards.map((card) => (
            <TriadCard key={card.title} {...card} />
          ))}
        </ul>
      </div>
    </MaxWidth>
  </Section>
);

export default Triad;
