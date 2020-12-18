import { Provider } from "../store/";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
