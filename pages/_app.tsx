import "../styles/globals.css";
import Header from "../components/common/sections/Header";

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
