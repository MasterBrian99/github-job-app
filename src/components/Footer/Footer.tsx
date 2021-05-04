import React from 'react';
import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Footer as Foot, FooterTab, Button, Icon, Text} from 'native-base';

export default function Footer() {
  const changeComponents = (key: string) => {
    Actions.push(key);
  };

  return (
    <>
      <Foot>
        <FooterTab style={styles.footer}>
          <Button vertical onPress={() => changeComponents('home')}>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical onPress={() => changeComponents('categories')}>
            <Icon name="duplicate" />
            <Text>category</Text>
          </Button>
          <Button vertical onPress={() => changeComponents('search')}>
            <Icon active name="search" />
            <Text>Search</Text>
          </Button>
          <Button vertical onPress={() => changeComponents('about')}>
            <Icon name="ios-logo-github" />
            <Text>Github</Text>
          </Button>
        </FooterTab>
      </Foot>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#212a35',
  },
});
