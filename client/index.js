import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'Axios';
import '@brainhubeu/react-carousel/lib/style.css'
import Carousel from '@brainhubeu/react-carousel';
import Icon from 'react-fa';
import styled from 'styled-components';



//Styled components
// const Product = styled.div`
//  transition: transform .5s ease;
//  max-width: 20vw;

//   &:hover {
//     transform: scale(1.04)
//   }
// `








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
      <>
      <h2>Sponsored products</h2>
      <Carousel 
        items={this.state.items} 
        sendAsinBroadcast={this.sendAsinBroadcast}
        arrowLeft={<Icon className="left" name="arrow-left" />}
        arrowRight={<Icon className="right" name="arrow-right" />}
        slidesPerPage={6}
        slidesPerScroll={2}
        slides={[]}
        breakpoints={{
          1000: { // these props will be applied when screen width is less than 1000px
            slidesPerPage: 2,
            clickToChange: false,
            centered: false,
            arrows: true,
            infinite: false,
          },
          500: {
            slidesPerPage: 1,
            slidesPerScroll: 1,
            clickToChange: false,
            centered: false,
            animationSpeed: 2000,
            infinite: false,
          },
        }}
        arrows
        > 
            {this.state.items.map((item) => {
              return (
              <div key={item.productTitle}> 
                <img src={`https://hackmazon-thumbs.s3.amazonaws.com/Images/${item.asin}_1.jpg`} height="160" width="120"
                onLoad={() => window.dispatchEvent(new Event('resize'))}
                onClick={() => this.sendAsinBroadcast(item.asin)}></img>
                <div>{item.productTitle}</div>
                <div color="#B12704">${item.price}<img src ="http://www.sclance.com/pngs/amazon-prime-logo-png/amazon_prime_logo_png_31200.png" height="25" width="48"></img></div>
              </div>
              )
          })}
        </Carousel>
        </>

    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

export default function deployCa() {
  ReactDOM.render(<App />, document.getElementById('app'));
}


