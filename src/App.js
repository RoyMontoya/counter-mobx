import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import Principal from './components/Principal'
import './App.css';

class App extends Component {
  render() {
    const {counter} = this.props;
    return (
      <div className="App">
        <Principal/>
      </div>
    );
  }
}

export default observer(App);
