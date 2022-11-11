import React from 'react';
import Image from 'react-bootstrap/Image'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class RandomImg extends React.Component{
  constructor(props){
    super(props);
      this.state={
        isOpen:false,
        imageSelected:{}
      }
    
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  handleImageClick=(event,image)=>{
    this.props.getMusic(image.words); 
    this.setState({
      imageSelected:image   
    })
  this.openModal();
}
  // ["woman", "coffee"]
render(){
  
  let images= this.props.images.map(image => {
    return <Image key= {image.id} alt= {image.id} src= {image.url} onClick={(event)=>{this.handleImageClick(event,image)}}/>
  })
 
  return(
<div className='imageDiv'>
  {images}
    <Modal show={this.state.isOpen} onHide={this.closeModal} size="lg">
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
    <Image  src={this.state.imageSelected.url}/>
      <p>
     {this.state.imageSelected.description}
      </p>
    </Modal.Body>
    <Button onClick={()=>{this.props.postImage(this.state.imageSelected)}} variant="primary">Add to Gallery</Button>
  </Modal>
  </div>
  );
};
}

export default RandomImg;

