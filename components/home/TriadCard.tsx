import Paragraph from "../common/atoms/Paragraph";

export interface TriadCardProps {
  icon: string;
  title: string;
  description: string;
}

const TriadCard = ({ icon, title, description }: TriadCardProps): JSX.Element => (
  <li className="w-72">
    <img className="h-16 w-auto mx-auto mb-5" src={icon} alt="" />
    <h3 className="py-4 px-6 text-center text-white bg-yellow">{title}</h3>
    <Paragraph className="max-w-full pt-5">{description}</Paragraph>
  </li>
);

export default TriadCard;
