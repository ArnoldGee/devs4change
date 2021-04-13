import { TriadProps } from "../components/home/Triad";
import { ContributorCardProps } from "../components/home/ContributorCard";

export const homeTriadData: TriadProps = {
  title: "What you get",
  cards: [
    {
      icon: "assets/icons/star.svg",
      title: "Official certifications",
      description:
        "Get credit for your work experience by helping non-profits and organizations solve real problems. Get an official certification from us and prove your expertise.",
    },
    {
      icon: "assets/icons/work.svg",
      title: "Real experience",
      description: "Build cool projects that you can put in your portfolio.",
    },
    {
      icon: "assets/icons/3-user.svg",
      title: "Grow your network",
      description:
        "Projects are built in a team of developers like you. Learn from them and develop teamwork skills.",
    },
  ],
};

export const contributors: ContributorCardProps[] = [
  {
    name: "Ainhoa Ortega",
    href: "https://www.linkedin.com/in/ainhoa-ortega-l/",
    description: "Teacher, Full Stack Developer and Animal Crossing fan",
    img: "assets/images/ainhoa.png",
  },
  {
    name: "Arnau Gómez",
    href: "https://www.linkedin.com/in/arnau-g%C3%B3mez-903b49187/",
    description: "Teacher, Full Stack Developer and cheese addict",
    img: "assets/images/arnau.jpg",
  },
];
