import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </>
  );
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
