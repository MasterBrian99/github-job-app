import React, {useContext} from 'react';
import Header from './components/Header/Header';
import Home from './container/Home';
import {Container, Content} from 'native-base';
import Footer from './components/Footer/Footer';
import Categories from './container/Categories';
import CountContext from './context/RouteContext';

const App = () => {
  let {componentName, headerTitle} = useContext(CountContext);

  return (
    <CountContext.Provider value={{componentName, headerTitle}}>
      <Container>
        <Header />
        <Content>
          {componentName === 'home' ? <Home /> : <Categories />}
        </Content>
        <Footer />
      </Container>
    </CountContext.Provider>
  );
};

export default App;
