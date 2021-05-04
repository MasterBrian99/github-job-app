import React, {useState} from 'react';
import {View} from 'react-native';
import {Footer as Foot, FooterTab, Button, Icon} from 'native-base';
import CountContext from '../../context/RouteContext';

export default function Footer() {
  const [count, setcount] = useState(0);
  let {componentName, headerTitle} = React.useContext(CountContext);
  return (
    <CountContext.Provider value={{componentName, headerTitle}}>
      <View>
        <Foot>
          <FooterTab>
            <Button onPress={() => (componentName = 'asd')}>
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
    </CountContext.Provider>
  );
}
