import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import styled from 'styled-components';



const HackCarousel = (props) => {

  let slides = <div key={item.productTitle} onClick={props.handleClick}> 
   <img src={`https://hackmazon-thumbs.s3.amazonaws.com/Images/${item.asin}_1.jpg`} height="160" width="120"
                   //onLoad={() => window.dispatchEvent(new Event('resize'))}
   onClick={() => props.sendAsinBroadcast(item.asin)}></img>
   {item.productTitle}
   <div>${item.price}<img src ="http://www.sclance.com/pngs/amazon-prime-logo-png/amazon_prime_logo_png_31200.png" height="25" width="48"></img>
 </div>
 </div>
  return(
    
    <HackCarousel
      slidesPerPage={5}
      slidesPerScroll={5}
      slides={props.slides}
      arrows
    ></HackCarousel>
  
  )
}
























//spacing the carousel
// const CarouselStyled = styled.div`
//    margin: 20px;
//    width: 100%;
//    height: 100%;
//    max-width: 95vw;
//  `

// //css for arrows
// const RightArrowC = styled.div`
// display: inline-block;
// width: 15px;
// height: 15px;
// border-top: 2px solid #000;
// border-right: 2px solid #000;
// transform: rotate(45deg);
// justify-content: right;
// `

// const LeftArrowC = styled.div`
// display: inline-block;
// width: 15px;
// height: 15px;
// border-top: 2px solid #000;
// border-right: 2px solid #000;
// transform: rotate(-135deg);
// justify-content: left;
// `

// const ItemsC = styled.div`
// padding: 5px;
// transition: transform .5s ease;
// max-width: 20vw;

// &:hover {
//   transform: scale(1.04)
// }
// `

// const DescriptionC = styled.p`
//   padding: 5px;
//   width: 130px;
//   max-width: 20vw;
// `

// const PriceC = styled.div`
//   color: #B12704;
//   display: inline-block;
//   max-width: 20vw;
// `


// //component for carousel
// const Carousel = (props) => {
//     const settings = {
//         dots: false,
//         lazyLoad: true,
//         infinite: true,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         nextArrow: <RightArrowC />,
//         prevArrow: <LeftArrowC />,
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: false
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 initialSlide: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//           ]
//       };




//     return (
//         <CarouselStyled>
//           <Slider {...settings}>
      
//             {props.items.map((item) => {
//               return (
//               <ItemsC key={item.productTitle} onClick={props.handleClick}> 
//                 <img src={`https://hackmazon-thumbs.s3.amazonaws.com/Images/${item.asin}_1.jpg`} height="160" width="120"
//                 //onLoad={() => window.dispatchEvent(new Event('resize'))}
//                 onClick={() => props.sendAsinBroadcast(item.asin)}></img>
//                 <DescriptionC>{item.productTitle}</DescriptionC>
//                 <PriceC>${item.price}<img src ="http://www.sclance.com/pngs/amazon-prime-logo-png/amazon_prime_logo_png_31200.png" height="25" width="48"></img></PriceC>
//               </ItemsC>
//               )
//           })}
//           </Slider>  
//           </CarouselStyled>
//     );
// }







// //components for arrows
// //right arrow
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <RightArrow onClick={onClick}>
//       </RightArrow>
//     );
//   }
  

//   //left arrow
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <LeftArrow onClick={onClick}>
//         </LeftArrow>
//     );
//   }

export default Carousel;