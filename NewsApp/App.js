import React, { Component } from 'react'
import AppNavgation from './App/Navigation/AppNavigation';
import { Provider } from 'react-redux'
import store from './App/Redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavgation />
      </Provider>
    )
  }
}
