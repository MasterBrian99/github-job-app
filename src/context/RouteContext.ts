import React from 'react';

interface Prop {
  componentName: string;
  headerTitle: string;
}
const CountContext = React.createContext<Prop>({
  componentName: 'home',
  headerTitle: 'Home',
});

export default CountContext;
