import React from 'react';
import {Container} from 'native-base';
import {StyleSheet, Text, ScrollView} from 'react-native';

const Home = () => {
  return (
    <>
      <ScrollView>
        <Container style={styles.header}>
          <Text>This is Home Section</Text>
        </Container>
      </ScrollView>
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
