import React, { Component } from 'react';
import {
  Router,
  Scene
} from 'react-native-router-flux';
import Signup from './signup';
import Login from './login';
import Home from './home';
export default class App extends Component {
  render() {
    return (
      <Router>

        <Scene key='root' style={{ paddingTop: 64 }} >
        <Scene key='signup' component={Signup} />
        <Scene key='home' component={Home} />
          <Scene key='login' component={Login} />

        </Scene>

      </Router>

    )
  }
}
