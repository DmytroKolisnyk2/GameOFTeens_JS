import Head from "next/head";

import "../styles/reset.scss";
import "../styles/global.scss";
import "react-notifications/lib/notifications.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

import NotificationContainer from "react-notifications/lib/NotificationContainer";
import ScrollTopArrow from "../components/ScrollTopArrow/ScrollTopArrow";
import NextNProgress from "nextjs-progressbar";

import { IntlProvider } from "next-intl";
import { FormattedMessage, useIntl } from "next-intl";
import en from "../locales/en.json";
import ukr from "../locales/ukr.json";
import { useRouter } from "next/router";
import AboutPage from '../components/AboutPage/AboutPage';
import SettingsModal from '../components/SettingsModal/SettingsModal';
import {useState} from 'react';
const messages = {
  en,
  ukr,
};
function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="description" />
        <link rel="icon shortcut" href="../logo.jpg" type="image/x-icon" />
        {/* //--
        <link rel="alternate" href="/" hrefLang="x-default" />
        <link rel="alternate" href="/" hrefLang="en" />
        <link rel="alternate" href="/ukr" hrefLang="ukr" />
      {Component.title ? <title>{Component.title}</title> : <title>Project</title>}

    </Head>
    <div id="root-modal"></div>

    <IntlProvider locale={locale} messages={messages[locale]}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <div className='body'>
            <Header handleOpenModal={setIsOpen} />
            <Component {...pageProps} />
            <Footer />
            <SettingsModal isOpen={Boolean(isOpen)} handleClose={handleClose}/>
          </div>
        </Provider>
      </PersistGate>
    </IntlProvider>
    <NextNProgress
      color="tomato"
      showOnShallow={true}
    />
    <ScrollTopArrow bgColor="red" />
    <NotificationContainer />
  </>

//-- */}
        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com/ar" hrefLang="ukr" />
        {Component.title ? <title>{Component.title}</title> : <title>Project</title>}
      </Head>
      <div id="root-modal"></div>
      
      <IntlProvider locale={locale} messages={messages[locale]}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <div className="body">
              <Header handleOpenModal={setIsOpen} />
              <Component setIsOpen={setIsOpen} {...pageProps} />
              <Footer />
              <SettingsModal isOpen={Boolean(isOpen)} handleClose={handleClose} />
            </div>
          </Provider>
        </PersistGate>
      </IntlProvider>
      <NextNProgress color="#9c27b0" showOnShallow={true} />
      <ScrollTopArrow bgColor="#9c27b0" />
      <NotificationContainer />
    </>
  );
}

export default MyApp;
