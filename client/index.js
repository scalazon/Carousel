import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Slider from "react-slick";
import axios from 'Axios';
import Carousel from './Carousel.js';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyDisplayed : {},
      items: [],
      currentHover: '',
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
          console.log(response);
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

  render() {

    //let items = this.state.items.data;
    return (
      <Carousel items={this.state.items} sendAsinBroadcast={this.sendAsinBroadcast}/>

    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

export default function deployCa() {
  ReactDOM.render(<App />, document.getElementById('app'));
}





// <div>
// <h3>1</h3>
// </div>
// <div>
// <h3>2</h3>
// </div>
// <div>
// <h3>3</h3>
// </div>
// <div>
// <h3>4</h3>
// </div>
// <div>
// <h3>5</h3>
// </div>
// <div>
// <h3>6</h3>
// </div>