import React from "react";
import "../../header_style.css";
import styled from "styled-components";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

   export const Spanheading= styled.span`
   font-size: 100px;

   
   `
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src="https://api.nasa.gov/images/logo.png" alt="Nasa Logo"></img></NavbarBrand>
          <h2>
        <Spanheading>N</Spanheading>ational
         <Spanheading > A</Spanheading>eronautics
         <Spanheading > S</Spanheading>pace
         <Spanheading > A</Spanheading>dministration
     </h2>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
      
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}
