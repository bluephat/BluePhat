import React, { Component } from 'react';
import MainCards from './MainCards';
import MainCarousel from './MainCarousel';
import { NavMenu } from './NavMenu';


export default class Home extends Component {
  static displayName = Home.name;

  render(){
    return(
      <div>
        <NavMenu />
        <MainCarousel />
        <MainCards />
      </div>
    );
  }
}