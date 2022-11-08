// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
// import RandomImg from './RandomImg';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      images: [],
      error: false
    }
  }

  getImageData = async ()=>{
  try{
    let imageData = await axios.get(`${process.env.REACT_APP_SERVER}/images`);
    console.log(imageData);
    this.setState({
      images: imageData.data,
    })
  }catch(error){
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
  render(){
  return (
    <>
    <Header></Header>
    {/* <RandomImg
    getImage ={this.getImage}
    images= {this.state.images}
    /> */}
   <Body
   images={this.state.images}
   getImage ={this.getImageData}
   />
    <Footer></Footer>
    </>
  );
  };
}

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

export default App;
