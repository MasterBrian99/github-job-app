import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {Container} from 'native-base';
const About = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <Container style={styles.header}>
          <Text>This is About Section</Text>
        </Container>
      </ScrollView>
      <Footer />
    </>
  );
};

export default About;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333a4d',
    height: 1000,
  },
});
