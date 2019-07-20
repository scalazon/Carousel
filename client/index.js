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
          }).then((this.state.items.map((item) => {
              this.setState({
                images: this.state.images.push(`https://hackmazon-thumbs.s3.amazonaws.com/Images/${item.asin}_1.jpg`)
              })
            console.log(items);
          })))
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
        />

    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

export default function deployCa() {
  ReactDOM.render(<App />, document.getElementById('app'));
}


