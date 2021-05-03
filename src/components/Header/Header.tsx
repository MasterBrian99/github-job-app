import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header as Head,
  Left,
  Right,
  Title,
  Button,
} from 'native-base';
import IconRocket from 'react-native-vector-icons/Octicons';
const Header = () => {
  return (
    <Container>
      <Head style={styles.header}>
        <Left>
          <Title style={styles.title}>Home</Title>
        </Left>
        <Right>
          <Button transparent style={styles.post}>
            <IconRocket name="logo-github" size={40} color="#000000" />
          </Button>
        </Right>
      </Head>
    </Container>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 50,
    shadowOffset: {
      width: 180,
      height: 110,
    },
  },
  title: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'Heebo-Bold',
  },
  post: {
    paddingTop: 15,
  },
});
