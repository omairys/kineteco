import React from 'react';
import './App.css';
//import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Footer from './component/Footer';
import Guarantee from './component/Guarantee';
import Header from './component/Header';
import History from './component/History';
import People from './component/People';
import Products from './component/Products';


function App() {
  return (
    <div className="App">
      <Header />
      <History />
      <Products />
      <Guarantee />
      <People />
      <Footer />
    </div>
  );
}

export default withAuthenticator(App);
