import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class MyNavbar extends Component{
    render () {
        return (
            <div>
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link to="/">hiyoco</Link>
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                  <Navbar.Text>
                    <Link to="/">dashboard</Link>&nbsp;
                  </Navbar.Text>
                </Nav>
              </Navbar>
            </div>
        );
    }
}
export default MyNavbar;
