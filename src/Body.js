import React from "react";
import Image from 'react-bootstrap/Image'
import './Body.css'

class Body extends React.Component {
    render() {
        return (
            <>
            <div id="body">
                <h3>... Or Select an image</h3>
                <div id="imgs">
                <Image src="https://via.placeholder.com/150"></Image>
                <Image src="https://via.placeholder.com/150"></Image>
                <Image src="https://via.placeholder.com/150"></Image>
                <Image src="https://via.placeholder.com/150"></Image>
                <Image src="https://via.placeholder.com/150"></Image>
                </div>
            </div>
            </>
        )
    }
}

export default Body;