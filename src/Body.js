import React from "react";
import Button from 'react-bootstrap/Button';
// import RandomImg from "./RandomImg";
import ExpImg from "./ExpImg";
import './Body.css'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  async componentDidMount() {

    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;
      console.log('token:  ', jwt);

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/images'
      }

      let data = await axios(config);

      this.setState({
        data: data.data
      })
    }

  }
  

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

export default withAuth0(Body);