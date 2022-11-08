import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import sampleImgA from './testImages/photo-1665692623767-5e533f71796d.png';
import sampleImgB from './testImages/photo-1667324746638-7c7c3d9eb54a.png';
import sampleImgC from './testImages/photo-1667429517242-90d8d7e5165f.png';

export default class ExpImg extends Component {
  render() {
    return (
      <div className='expDiv'>
      <Image key= "1" src={sampleImgA}/>
      <Image key= "2" src={sampleImgB}/>
      <Image key= "3" src={sampleImgC}/>
      </div>
    )
  }
}
