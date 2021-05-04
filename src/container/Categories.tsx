import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {Container} from 'native-base';
const Categories = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <Container style={styles.header}>
          <Text>This is Categories Section</Text>
        </Container>
      </ScrollView>
      <Footer />
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333a4d',
    height: 1000,
  },
});
