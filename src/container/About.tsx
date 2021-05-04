import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

import {Container} from 'native-base';
const About = () => {
  return (
    <>
      <ScrollView>
        <Container style={styles.header}>
          <Text>This is About Section</Text>
        </Container>
      </ScrollView>
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
