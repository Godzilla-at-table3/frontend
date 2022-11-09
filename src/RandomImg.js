import React from 'react';
import Image from 'react-bootstrap/Image'

class RandomImg extends React.Component{
render(){
  let images= this.props.images.map(image => {
    return <Image key= {image.id} alt= {image.id} src= {image.url}/>
  })
  return(
<div className='imageDiv'>{images}</div>
  );
};
}

export default RandomImg;