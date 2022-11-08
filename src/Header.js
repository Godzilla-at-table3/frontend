import React from "react";
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
    render() {
        return (

            <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand className= "Header">Pic My Song</Navbar.Brand>
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
                  <Link to="/about" className="nav-link">About Us</Link>
            </NavItem>
          </Navbar>
            // <div id="header">
            //     <h1>Picture to Song</h1>
            //     <div id="links">
            //         <a href="https://localhost:3001">Home</a>
            //         <a href="https://localhost:3001">About</a>
            //     </div>
            // </div>
        )
    }
}

export default Header;