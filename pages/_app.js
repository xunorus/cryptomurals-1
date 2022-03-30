import '../styles/globals.css';
import { ConnectProvider } from '../context/connectContext';
import { CityProvider } from '../context/CityContext';

import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  console.log(MoralisProvider)

  return (
    <MoralisProvider 
    initializeOnMount={true}
    appId="Lx28OvD1jYsfl8Q52brKgUbJ1yGP9kWgffDg2hrU" 
    serverUrl="https://hyorvrgxcdmm.usemoralis.com:2053/server">
    <ConnectProvider>
      <CityProvider>
        <Component {...pageProps} />
      </CityProvider>
    </ConnectProvider>
    </MoralisProvider>
  );
}

export default MyApp;
