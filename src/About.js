import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import './AboutCSS.css'

export default class About extends Component {
  render() {
    return (
    
      <> 
      <div className='info'>
        <h5>about</h5>
        <p> lorem ipsum lbkbjkfjffjf  </p>
      </div>
      <div className='profiles'>
      <div className= "kenny">
        <img src="https://placebear.com/320/240"></img>
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
        <img src="https://placebear.com/320/240"></img>
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
        <img  src="https://placebear.com/320/240"></img>
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
        <img src="https://placebear.com/320/240"></img>
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
      </>
     

    )
  }
}
