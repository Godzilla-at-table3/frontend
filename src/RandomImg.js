import React from 'react';
import Image from 'react-bootstrap/Image'
import Modal from "react-bootstrap/Modal";

class RandomImg extends React.Component{
  constructor(props){
    super(props);
      this.state={
        isOpen:false
      }
    
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  handleImageClick=(event,desc)=>{
    this.props.getMusic(desc);
    this.openModal();
  }
  
render(){
  
  let images= this.props.images.map(image => {
    return <Image key= {image.id} alt= {image.id} src= {image.url} onClick={this.openModal}/>
  })
  let modal= this.props.images.map(image=>{
    return  <Modal show={this.state.isOpen} onHide={this.closeModal} size="lg">
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
    <Image key= {image.id} alt= {image.id} src= {image.url} onClick={() => this.props.getMusic(image.words)}/>
      <p>
      music
      </p>
    </Modal.Body>
    <Modal.Footer>
    music
    </Modal.Footer>
  </Modal>
  })

  
  return(
<div className='imageDiv'>{images}{modal}</div>
  );
};
}

export default RandomImg;

