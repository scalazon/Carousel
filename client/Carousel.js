import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

const CarouselStyled = styled.div`
  margin: 20px;
`

const RightArrow = styled.div`
display: inline-block;
width: 15px;
height: 15px;
border-top: 2px solid #000;
border-right: 2px solid #000;
transform: rotate(45deg);
justify-content: right;
`

const LeftArrow = styled.div`
display: inline-block;
width: 15px;
height: 15px;
border-top: 2px solid #000;
border-right: 2px solid #000;
transform: rotate(-135deg);
justify-content: left;
`

const Carousel = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <CarouselStyled>
          <Slider {...settings}>
      
            {props.items.map((item) => {
              return (
              <div onClick={props.handleClick}> 
                <img src={`https://hackmazon-images.s3.amazonaws.com/Images/${item.asin}_1.jpg`} height="200" width="160"
                onLoad={() => window.dispatchEvent(new Event('resize'))}></img>
                {item.productTitle} <br></br>
                ${item.price} 
              </div>
              )
          })}
          </Slider>  
          </CarouselStyled>
    );
}








function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <RightArrow onClick={onClick}>
      </RightArrow>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <LeftArrow onClick={onClick}>
        </LeftArrow>
    );
  }

export default Carousel;