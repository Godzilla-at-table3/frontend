import React, { Component } from 'react'


import './AboutCSS.css'

export default class About extends Component {
  constructor(props) {
    super(props);
    this.down = React.createRef();
    this.up = React.createRef();
  }
  scrollDown = () => this.down.current.scrollIntoView();
  scrollToUp = () => this.up.current.scrollIntoView();
  render() {
    return (

      <>
        <div ref={this.up} className='info'>
          <h5>about</h5>
          <p> lorem ipsum lbkbjkfjffjf  </p>
                
          <button className='buttonDown' onClick={() => this.scrollDown()}>
           More about us
          </button>
        </div>
        <div ref={this.down} class="container">
        <div className='profiles'>
          <div className="kenny">
            <img className='profileImg' alt="kenny" src="https://placebear.com/320/240"></img>
            <section>
              <h4>Kenny</h4>
              <p>words</p>
              <h4>Favorite songs</h4>
              <ul>
                <li>song link</li>
                <li>song</li>
                <li>song</li>
              </ul>
              <a>link</a>
              <a>link</a>
            </section>
          </div>
          <div className="nick">
            <img className='profileImg' alt="nick" src="https://placebear.com/320/240"></img>
            <section>
              <h4>Nick</h4>
              <p>words</p>
              <h4>Favorite songs</h4>
              <ul>
                <li>song link</li>
                <li>song</li>
                <li>song</li>
              </ul>
              <a>link</a>
              <a>link</a>
            </section>
          </div>
          <div className='tj'>
            <img className='profileImg' alt="tj" src="https://placebear.com/320/240"></img>
            <section>
              <h4>Tj</h4>
              <p>words</p>
              <h4>Favorite songs</h4>
              <ul>
                <li>song link</li>
                <li>song</li>
                <li>song</li>
              </ul>
              <a>link</a>
              <a>link</a>
            </section>
          </div>
          <div className='monica'>
            <img className='profileImg' alt="monica" src="https://placebear.com/320/240"></img>
            <section>
              <h4>Monica</h4>
              <p>words</p>
              <h4>Favorite songs</h4>
              <ul>
                <li>song link</li>
                <li>song</li>
                <li>song</li>
              </ul>
              <a>link</a>
              <a>link</a>
            </section>

          </div> 
        </div> 
    
        </div>
      </>


    )
  }
}

