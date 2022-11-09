import React from "react";
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
    render() {
        return (

            <Navbar collapseOnSelect expand="lg" className= "Navbar">
            <Navbar.Brand className= "Header">Pic My Song</Navbar.Brand>
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
                  <Link to="/about" className="nav-link">About Us</Link>
            </NavItem>
          </Navbar>
        )
    }
}

export default Header;