import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';
import About from './About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      error: false
    }
  }

  getImageData = async () => {
    try {
      let imageData = await axios.get(`${process.env.REACT_APP_SERVER}/images`);
      console.log(imageData);
      this.setState({
        images: imageData.data,
      })
    } catch (error) {
      console.log('ERROR: Image data unavailable', error.response);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  componentDidMount() {
    this.getImageData();
  }
  render() {
    return (
      <>
        <Router>
          <Header />
          {this.props.auth0.isAuthenticated ?
            <>
              <Profile />
              <Routes>
                <Route
                  exact path="/"
                  element={
                    <Body
                      images={this.state.images}
                      getImage={this.getImageData}
                    />
                  }
                ></Route>
                <Route
                  exact path="/about"
                  element={
                    <About />
                  }
                ></Route>
              </Routes>
              <Logout />
            </>
            :
        <Login />
                } 
          <Footer />
        </Router>
      </>
    );
  };
}

export default withAuth0(App);



// * do we need this?
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
/* function App() {
  return (
    <>
    <Container fluid>
      <Row id="header">
        <h1>Image -> Song</h1>
      </Row>
      <Row id="body">
        <Body></Body>
      </Row>
      <Row id="footer">
        <h3>Godzilla @ Table 3</h3>
      </Row>
    </Container>
    </>
  );
}
 */


