import React, { Component } from 'react'
import './AboutCSS.css'
import Image from 'react-bootstrap/Image'


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
          {/* <h2>About</h2> */}
          <p className="headerabout">About</p>
          <p className="words"> Pic my song was conceived because of our love for music. This was our chance to play with the Spotify and Unsplash Api's vast array of offerings and discover new music.</p>
                
          <button className='buttonDown' onClick={() => this.scrollDown()}>
           More about us
          </button>
        </div>
        {/* <div  class="container"> */}
        <div ref={this.down}className='profiles'>
          <div className="kenny">
          <Image fluid="true" className='profileImg' alt="monica" src="https://ca.slack-edge.com/T039KG69K-U0460098EQ7-e77150c84b09-512"/>
            <section>
              <h4>Kenny</h4>
              <p>I'm Kenny W. Lino. My background is in linguistics and natural language processing. Now, I'm a full-stack web developer student learning frameworks like React, Express and Node. I'm interested in combining my passion for creativity and making exciting apps that provide people with a positive experience.</p>
              <h4>Favorite songs</h4>
              <ul>
                <li>"POP!" – Nayeon</li>
                <li>"Rock with U" – Janet Jackson</li>
                <li>"Traveling" – Utada Hikaru</li>
              </ul>

            </section>
          </div>
          <div className="nick">
          <Image fluid="true" className='profileImg' alt="monica" src="https://ca.slack-edge.com/T039KG69K-U0406RSNH6E-fdb4d872a217-512"/>
            <section>
              <h4>Nick</h4>
              <p>I'm a hard-working professional driven to accomplish great things for any team. Passionate about technology and its applied uses for work and play.  Live and play in Phoenix, AZ.</p>
              <h4>Favorite songs</h4>
              <ul>
                <li>"Right Where It Belongs" - Nine Inch Nails</li>
                <li>"Go with the Flow - Queens Of The Stone Age"</li>
                <li>"All These Things That I’ve Done" - The Killers</li>
              </ul>

            </section>
          </div>
          <div className='tj'>
          <Image fluid="true" className='profileImg' alt="monica" src="https://ca.slack-edge.com/T039KG69K-U03F4B9F5B8-f17bbf9dcd6a-512"/>
            <section>
              <h4>Tj</h4>
              <p>Hey! I’m entering tech after having worked many odd jobs, I am excited to apply the variety of experience I have acquired to a new adventure!</p>
              <h4>Favorite songs</h4>
              <ul>
                <li>"New Millenium Cyanide Christ" - Meshuggah</li>
                <li>"Set" - Car Bomb</li>
                <li>"Texas Instruments" - They Are Gutting a Body of Water</li>
              </ul>

            </section>
          </div>
          <div className='monica'>
            <Image fluid="true" className='profileImg' alt="monica" src="https://ca.slack-edge.com/T039KG69K-U03UUFK6A5R-6afdc365eaab-512"/>
            
          
            <section>
              <h4>Monica</h4>
              <p>Hello, hello, hello! I'm Monica Ramirez, I'm new to the tech field. Coding has been a rollercoaster of ups and downs, but I'm having the best time of my life. Slowly creeping up to wanting to work on backend. Coding challenges me and pushes me, I love it. If I'm not in front of the screen, you can find me at the gym lifting weights or doing mom things. </p>
              <h4>Favorite songs</h4>
              <ul>
                <li>"Der Meister"- Rammstein</li>
                <li>"Hybrid Moments" - Misfits</li>
                <li>"Cries and Whispers" - Cho Young-Wuk
                </li>
              </ul>

            </section>

          </div> 
          
        </div> 
    
       {/* </div> */}
      </>


    )
  }
}

