import React from 'react';
import Slider from "react-slick";



const Carousel = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      //let items = props.items.data;

    return (
        <div margin="10">
          <Slider {...settings}>
      
            {props.items.map((item) => {
              return (
              <div onClick={props.handleClick}> 
                <img src={`https://hackmazon-images.s3.amazonaws.com/Images/${item.asin}_1.jpg`} height="200" width="160"></img>
                {item.productTitle} <br></br>
                ${item.price} 
              </div>
              )
          })}
          </Slider>  
        </div>
    );
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

export default Carousel;