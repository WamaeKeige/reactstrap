import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  InputGroup, InputGroupAddon, InputGroupText, Input,
  DropdownItem } from 'reactstrap';
  import Cards from './Cards';

class App extends Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }
  toggle(){
     this.setState({
       isOpen: !this.state.isOpen
     });
  }
  render() {
    return (
      <div>
        <Navbar color="fadded" light expand="md">
          <NavbarBrand> Music Shop </NavbarBrand>
           <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="m1-auto" navbar>
        <NavItem>
          <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary">To the Right!</Button>
        </InputGroupAddon>
      </InputGroup>
        </NavItem>
        <NavItem>
        <NavLink >Contact Us</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Account
                  </DropdownItem>
                  <DropdownItem>
                    Shopping Cart
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Cards/>
      </div>
    );
  }
}

export default App;
