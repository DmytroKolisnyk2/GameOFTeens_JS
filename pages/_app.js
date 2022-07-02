import Head from 'next/head';

import "../styles/reset.scss"
import '../styles/global.scss';

import 'react-notifications/lib/notifications.css';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

import NotificationContainer from "react-notifications/lib/NotificationContainer";
import ScrollTopArrow from "../components/ScrollTopArrow/ScrollTopArrow";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
    
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="description" />
      <link
        rel="icon shortcut"
        href="../logo.jpg"
        type="image/x-icon"
      />
      {Component.title ? <title>{Component.title}</title> : <title>Project</title>}

    </Head>
    <Header/>
    <div id="root-modal"></div>

    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </PersistGate>

    <NextNProgress
      color="tomato"
      showOnShallow={true}
    />

    <ScrollTopArrow bgColor="red" />
    <NotificationContainer />
    <Footer/>
 
  </>
}

export default MyApp;
