import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import sampleImgA from './testImages/photo-1665692623767-5e533f71796d.png';
import sampleImgB from './testImages/photo-1667324746638-7c7c3d9eb54a.png';
import sampleImgC from './testImages/photo-1667429517242-90d8d7e5165f.png';
import Modal from "react-bootstrap/Modal";

export default class ExpImg extends Component {
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
  
  render() {
    let imgList = [{ "image": sampleImgA, "description": "skyscraper" }, 
                   { "image": sampleImgB, "description": "basement"}, 
                   { "image": sampleImgC, "description": "bike"}];

    let imgComp = imgList.map((img, idx) => {
      return <Image key={idx} src={img.image} desc={img.description} onClick={(event) => this.handleImageClick(event,img.description)} />
    });
    let modal= imgList.map((img,idx)=>{
      return  <Modal show={this.state.isOpen} onHide={this.closeModal} size="lg">
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <Image key={idx} src={img.image} desc={img.description} onClick={() => this.props.getMusic(img.description)} />
        <p>
        music
        </p>
      </Modal.Body>
      <Modal.Footer>
      music
      </Modal.Footer>
    </Modal>
    })

    return (
      <div className='expDiv'>
      {imgComp}{modal}
      </div>
    )
  }
}
