import React from 'react';
import Header from './components/Header/Header';
import Home from './container/Home';
import {Container, Content} from 'native-base';
import Footer from './components/Footer/Footer';
import Categories from './container/Categories';

const App = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Home />
        <Categories />
      </Content>
      <Footer />
    </Container>
  );
};

export default App;
