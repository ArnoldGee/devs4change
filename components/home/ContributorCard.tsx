import Paragraph from "../common/atoms/Paragraph";

export interface ContributorCardProps {
  name: string;
  img: string;
  href: string;
  description: string;
}

const ContributorCard = ({ description, href, img, name }: ContributorCardProps): JSX.Element => (
  <li className="w-72">
    <img className="h-20 w-auto mx-auto mb-5 rounded-full" src={img} alt="" />
    <h3 className="py-4 px-6 text-center text-white bg-yellow">
      <a href={href}>{name}</a>
    </h3>
    <Paragraph className="max-w-full pt-5">{description}</Paragraph>
  </li>
);

export default ContributorCard;
