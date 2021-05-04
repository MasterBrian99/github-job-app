import React from 'react';
import {Container} from 'native-base';
import Footer from './components/Footer/Footer';
import Route from './Router/Route';
import {ScrollView, View} from 'react-native';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Container>
        <Route />
      </Container>
    </>
  );
};

export default App;
