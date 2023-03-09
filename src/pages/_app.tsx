import "styles/globals.css";
import type { AppProps } from "next/app";
import Sharedlayout from "components/SharedLayout";
import Head from "next/head";
import { Provider } from "react-redux";
import store, { persistor } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <title>films</title>
          </Head>
          <Sharedlayout>
            <Component {...pageProps} />
          </Sharedlayout>
        </PersistGate>
      </Provider>
    </>
  );
}
