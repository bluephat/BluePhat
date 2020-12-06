import React, { Component } from 'react';
import MainCarousel from './MainCarousel';
import { NavMenu } from './NavMenu';


export default class Home extends Component {
  static displayName = Home.name;

  render(){
    return(
      <div>
        <NavMenu />
        <MainCarousel />
      </div>
    );
  }
}