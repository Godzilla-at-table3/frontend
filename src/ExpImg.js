import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export default class ExpImg extends Component {
  render() {
    return (
      <div className='expDiv'>
      <Image key= "1"src="../testImages/photo-1665692623767-5e533f71796d.png"/>
      <Image key= "2"src="../testImages/photo-1667324746638-7c7c3d9eb54a.png"/>
      <Image key= "3"src="../testImages/photo-1667429517242-90d8d7e5165f.png"/>
      </div>
    )
  }
}
