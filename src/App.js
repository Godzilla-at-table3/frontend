import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Login from './Login';
import Logout from './Logout';
// import Profile from './Profile';
import UserData from './UserData';
import { withAuth0 } from '@auth0/auth0-react';
import About from './About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SpotifyWebPlayer from 'react-spotify-web-playback';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage:{},
      modalState:false,
      error: false,
      // this.props.auth0.isAuthenticated
      fakeAuthVar: true,
      songs: [],
      selectedSong: ['spotify:artist:6HQYnRM4OzToCYPpVBInuU'],
    }
  }
  handleButtonClick = () => {
    this.props.handleOpenModal(this.props)
  }
// modal to add 
  handleOpenModal = () => {
    this.setState({
      modalState: true,
    })
  }

  handleClosedModal = () => {
    this.setState({
      modalState: false,
    })
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

  getMusicData = async (desc) => {
    try {
      console.log('DESC>>>>' + desc);
      let musicData = await axios.get(`${process.env.REACT_APP_SERVER}/getSpotifySong?searchQuery=${desc}`);
      console.log(musicData.data.tracks.items[0].uri);
      this.setState({
        selectedSong: [musicData.data.tracks.items[0].uri]
      });

    } catch (error) {
      console.log('ERROR: Music data unavailable', error.response);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  componentDidMount() {
    // this.getImageData();
  }
  
  render() {
    return (
      <>
        <Router>
          <Header />
          {this.props.auth0.isAuthenticated ?
            <>
              <Routes>
                <Route
                  exact path="/"
                  element={
                    <Body
                      images={this.state.images}
                      getImage={this.getImageData}
                      getMusic={this.getMusicData}
                      show={this.handleButtonClick}
                      
                    />
                  }
                ></Route>
                <Route
                  exact path="/user"
                  element={
                    <UserData />
                  }
                >

                </Route>
                <Route
                  exact path="/about"
                  element={
                    <About />
                  }
                ></Route>
              </Routes>
              <SpotifyWebPlayer 
                  token='BQC-8P1ZDp15pmbiCk8S8rXX1JhhgeAammclZiXbbWA0x26O90XSMvfPyJocT4BwqLwOl6Zpxom12Bl8tpOqvgl5_jdBonslS_EIoB5EHJVbhEgftZxw9NtuDOr4vwU7W2anSg7Q-4zKDtQN8I8EtiKtosYxZtCH-KeqBvMXu29QKSZT8UxrC2kl_BxtujNZxxNtal4B1mFjNqUsAXUe2mbFB4hotwLo'
                  uris={this.state.selectedSong}
                  autoPlay={true}
                />
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



