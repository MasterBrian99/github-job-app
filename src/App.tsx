import React from 'react';
import {Container} from 'native-base';
import Footer from './components/Footer/Footer';
import Route from './Router/Route';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Route />
      </Container>
      <Footer />
    </>
  );
};

export default App;
