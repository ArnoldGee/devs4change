import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Header from '../components/common/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
