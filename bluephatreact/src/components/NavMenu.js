import React, { Component } from 'react';
import { Collapse, Container, Dropdown, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#2199CD"}}>
          <Container>
            <NavbarBrand tag={Link} to="/">Accounting Toolbox</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/accountportal">Acount Portal</NavLink>
                </NavItem>
                <NavItem>
                   <Dropdown tag={Link} className="text-dark" to="/admininfo">Account Administration</Dropdown>
                </NavItem>

              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}