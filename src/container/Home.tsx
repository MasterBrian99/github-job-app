import React from 'react';
import {Container} from 'native-base';
import {StyleSheet, Text, ScrollView} from 'react-native';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <Container style={styles.header}>
          <Text>This is Home Section</Text>
        </Container>
      </ScrollView>
      <Footer />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333a4d',
    height: 1000,
  },
});
// background-color: #4158D0;
// background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
