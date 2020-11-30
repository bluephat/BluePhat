import React, { Component } from 'react';

import './App.css';
import { NavMenu } from './components/NavMenu';


export default class App extends Component {
  static displayName = App.name;

  render(){
    return(
      <div>
        <NavMenu />
      </div>
    );
  }
}
