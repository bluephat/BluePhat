import React, { Component } from 'react';
import { NavMenu } from './NavMenu';


export default class Home extends Component {
  static displayName = Home.name;

  render(){
    return(
      <div>
        <NavMenu />
      </div>
    );
  }
}