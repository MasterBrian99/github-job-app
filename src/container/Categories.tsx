import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

import {Container} from 'native-base';
const Categories = () => {
  return (
    <>
      <ScrollView>
        <Container style={styles.header}>
          <Text>This is Categories Section</Text>
        </Container>
      </ScrollView>
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
