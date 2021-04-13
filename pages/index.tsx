import Head from "next/head";
import HeroHome from "../components/home/HeroHome";
import NoMoreTodoLists from "../components/home/NoMoreTodoLists";
import styles from "../styles/Home.module.css";
import Triad from "../components/home/Triad";
import { contributors, homeTriadData } from "../data/home";
import ContributorsSection from "../components/home/ContributorsSection";
import CallToActionSection from "../components/home/CallToActionSection";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devs4change</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroHome />
      <NoMoreTodoLists />
      <Triad {...homeTriadData} />
      <ContributorsSection contributors={contributors} />
      <CallToActionSection />
    </div>
  );
}
