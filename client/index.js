import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import axios from 'Axios';

export default class CustomArrows extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  componentDidMount() {
      axios.get('/')
        .then((response) => {
          console.log(response);
        }).catch((err) => {
          console.log('Err in componentDidMount:', err);
        })
  }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <div>
            <h3 className="item">1</h3>
          </div>
          <div>
            <h3 className="item">2</h3>
          </div>
          <div>
            <h3 className="item">3</h3>
          </div>
          <div>
            <h3 className="item">4</h3>
          </div>
          <div>
            <h3 className="item">5</h3>
          </div>
          <div>
            <h3 className="item">6</h3>
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

ReactDOM.render(<CustomArrows />, document.getElementById('app'));
