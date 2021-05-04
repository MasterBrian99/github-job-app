import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';

import {Container} from 'native-base';

const Search = () => {
  return (
    <>
      <ScrollView>
        <Container style={styles.header}>
          <Text>This is Search Section</Text>
        </Container>
      </ScrollView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333a4d',
    height: 1000,
  },
});
