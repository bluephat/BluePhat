import React, { Component } from 'react';
import { Collapse,
         Container, 
         UncontrolledDropdown,
         DropdownItem, 
         DropdownToggle,
         DropdownMenu, 
         Navbar, 
         NavbarBrand, 
         NavbarToggler, 
         NavItem, 
         NavLink, 
         Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from './layoutimages/headerlogoblue.png';

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
        <Navbar className="navbar-expand-lg navbar-light" style={{backgroundColor:"#2199CD"}}>
          <Container>
            <NavbarBrand tag={Link} to="/"><img src={logo} alt="headerlogo" /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              {/*Comments have to be within brackets for some reason. And they can't be seen within the HTML*/}
              <Form className="form-inline my-2 my-lg-0 ml-auto">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
              </Form>
            <ul class="navbar-nav mr-auto">
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/blog">Blog</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/bis">BIS</NavLink>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown>
                    <DropdownToggle tag="a" className="nav-link text-dark" caret> Clans </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header Action</DropdownItem>
                        <DropdownItem disabled>Disabled Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Divided Action</DropdownItem>
                      </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}


