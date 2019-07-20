import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Slider from "react-slick";
import axios from 'Axios';
import HackCarousel from './Carousel.js';
import '@brainhubeu/react-carousel/lib/style.css'
import Carousel from '@brainhubeu/react-carousel';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyDisplayed : {},
      items: [],
      images:[],
      itemClicked: false //when changed to true, send the asin of the currentHover
    };

    this.sendAsinBroadcast = this.sendAsinBroadcast.bind(this);

  }

  componentDidMount() {
      axios.get('http://carouseltest-dev.us-east-1.elasticbeanstalk.com/api/items')
        .then((response) => {
          this.setState({
            items: response.data
          })
        }).catch((err) => {
          console.log('Err in componentDidMount:', err);
        })
  }


  // const bc = new BroadcastChannel('product-change');
  //   bc.onmessage = function (ev) { 
  //     console.log('Changing the product to ' + ev.data + ', boss!'); 
  //   } //replace with your handler


  sendAsinBroadcast(asin) {
    const bc = new BroadcastChannel('product-change');
    bc.postMessage(asin);
  }
  

  getAllImages() {

  }


  render() {
    // let asin = 
    // let slides = function() {

    // }

    return (
      <Carousel 
        items={this.state.items} 
        sendAsinBroadcast={this.sendAsinBroadcast}
        slidesPerPage={6}
        slidesPerScroll={2}
        slides={[1,2,3,4,5,6,7,8,9,0,10]}
        arrows
        > 
            {this.state.items.map((item) => {
              return (
              <div key={item.productTitle}> 
                <img src={`https://hackmazon-thumbs.s3.amazonaws.com/Images/${item.asin}_1.jpg`} height="160" width="120"
                //onLoad={() => window.dispatchEvent(new Event('resize'))}
                onClick={() => this.sendAsinBroadcast(item.asin)}></img>
                <div>{item.productTitle}</div>
                <div>${item.price}<img src ="http://www.sclance.com/pngs/amazon-prime-logo-png/amazon_prime_logo_png_31200.png" height="25" width="48"></img></div>
              </div>
              )
          })}
        </Carousel>

    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

export default function deployCa() {
  ReactDOM.render(<App />, document.getElementById('app'));
}


