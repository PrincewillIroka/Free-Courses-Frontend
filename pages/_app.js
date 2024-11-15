import "../styles/index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
