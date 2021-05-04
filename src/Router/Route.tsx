import React from 'react';
import Categories from '../container/Categories';
import Home from '../container/Home';
import {Router, Scene} from 'react-native-router-flux';
import Search from '../container/Search';
import About from '../container/About';

const Route = () => {
  return (
    <>
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} hideNavBar={true} initial={true} />
          <Scene key="categories" component={Categories} hideNavBar={true} />
          <Scene key="search" component={Search} hideNavBar={true} />
          <Scene key="about" component={About} hideNavBar={true} />
        </Scene>
      </Router>
    </>
  );
};

export default Route;
