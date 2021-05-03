import React from 'react';
import {View} from 'react-native';
import {Footer as Foot, FooterTab, Button, Icon} from 'native-base';
export default function Footer() {
  return (
    <View>
      <Foot>
        <FooterTab>
          <Button>
            <Icon name="apps" />
          </Button>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button active>
            <Icon active name="navigate" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Foot>
    </View>
  );
}
