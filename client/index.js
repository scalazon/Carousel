import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div>
            <h2> Single Item</h2>
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
        )
    }
}

ReactDOM.render(<Carousel />, document.getElementById('app'));
