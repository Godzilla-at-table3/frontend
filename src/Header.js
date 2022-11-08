import React from "react";

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <h1>Picture to Song</h1>
                <div id="links">
                    <a href="https://localhost:3001">Home</a>
                    <a href="https://localhost:3001">About</a>
                </div>
            </div>
        )
    }
}

export default Header;