import Head from "next/head";
import HeroHome from "../components/home/HeroHome";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devs4change</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroHome />
    </div>
  );
}
