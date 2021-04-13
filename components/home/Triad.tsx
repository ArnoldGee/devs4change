import TriadCard, { TriadCardProps } from "./TriadCard";
import Section from "../atoms/Section";
import MaxWidth from "../atoms/MaxWidth";
import TextH2 from "../atoms/TextH2";

export interface TriadProps {
  title: string;
  cards: [TriadCardProps, TriadCardProps, TriadCardProps];
}

const Triad = ({ title, cards }: TriadProps): JSX.Element => (
  <Section>
    <MaxWidth>
      <div className="p-20 space-y-12">
        <TextH2 className="text-brown text-center">{title}</TextH2>
        <ul className="flex justify-center items-stretch space-x-16">
          {cards.map((card) => (
            <TriadCard key={card.title} {...card} />
          ))}
        </ul>
      </div>
    </MaxWidth>
  </Section>
);

export default Triad;
