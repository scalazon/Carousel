import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import axios from 'Axios';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyDisplayed : {},
      items: [],
      currentHover: '',
      clicked: false //when changed to true, send the asin of the currentHover
    };

  }

  componentDidMount() {
      axios.get('/')
        .then((response) => {
          console.log(response);
        }).catch((err) => {
          console.log('Err in componentDidMount:', err);
        })
  }


  // const bc = new BroadcastChannel('product-change');
  //   bc.onmessage = function (ev) { 
  //     console.log('Changing the product to ' + ev.data + ', boss!'); 
  //   } //replace with your handler


  // const bc = new BroadcastChannel('product-change');
  // bc.postMessage('Im an ASIN!');

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}





function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

ReactDOM.render(<Carousel />, document.getElementById('app'));
