import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';



export default class App extends Component {
  static displayName = App.name;

  render(){
    return(
      <div>
        <Home />
      </div>
    );
  }
}
