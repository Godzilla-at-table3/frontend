import React from "react";
import Button from 'react-bootstrap/Button';
// import RandomImg from "./RandomImg";
import ExpImg from "./ExpImg";
import './Body.css'

class Body extends React.Component {
    render() {
        return (
            <>
            <div id="body">
                <h3>... Or Select an image</h3>
                <ExpImg/>
                {/* <RandomImg className="RandomImg"
                images={this.props.images}
                /> */}
                <Button onClick= {this.props.getImage}>Randomize</Button>
            </div>
            </>
        )
    }
}

export default Body;