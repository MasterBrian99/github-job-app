import React, {useContext, useState} from 'react';
import {Container} from 'native-base';
import {Content} from 'native-base';
import {StyleSheet, View, Text, Button} from 'react-native';
import CountContext from '../context/RouteContext';

const Home = () => {
  let {componentName, headerTitle} = useContext(CountContext);
  const [state, setstate] = useState(componentName);
  return (
    <View>
      <Text>This is Home Section</Text>
      <Button title="Home" onPress={() => setstate('asdads')}>
        <Text>Hello</Text>
      </Button>
    </View>
  );
};

export default Home;
