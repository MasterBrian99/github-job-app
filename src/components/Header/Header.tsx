import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header as Head, Left, Right, Title, Button} from 'native-base';
import IconRocket from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';
const Header = () => {
  return (
    <View>
      <Head style={styles.header}>
        <Left>
          <Title style={styles.title}>Home</Title>
        </Left>

        <Right>
          <Button
            transparent
            style={styles.post}
            onPress={() => Actions.categories()}>
            <IconRocket name="info" size={15} color="#ffffff" />
          </Button>
        </Right>
      </Head>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#242a37',
    shadowColor: '#000',
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'Heebo-Bold',
  },
  post: {
    paddingTop: 15,
  },
});
