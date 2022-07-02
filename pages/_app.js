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
import AboutPage from '../components/AboutPage/AboutPage';
import SettingsModal from '../components/SettingsModal/SettingsModal';
import {useState} from 'react';
function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
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
    <div id="root-modal"></div>


    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <div className='body'>
          <Header handleOpenModal={handleClose} />

          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </PersistGate>

    <NextNProgress
      color="tomato"
      showOnShallow={true}
    />
    <ScrollTopArrow bgColor="red" />
    <NotificationContainer />
    <SettingsModal isOpen={isOpen} handleClose={handleClose}/>
  </>
}

export default MyApp;
