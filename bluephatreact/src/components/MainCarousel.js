import React, {Component} from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import slide1 from './layoutimages/websitewelcome.jpg';
import slide2 from './layoutimages/websitewelcometwo.jpg';
import slide3 from './layoutimages/websitewelcomethree.jpg';


const carouselItems = [
  {
    src: slide1
  },
  {
    src: slide2
  },
  {
    src: slide3/*,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'*/
  }
];

export default class MainCarousel extends Component {
    static displayName = MainCarousel.name;
    
    render(){
        return (
            //https://reactstrap.github.io/components/layout/ to eventually get the rows and columns working
            <div className = "col-md-9" id="mainSlides">
             <UncontrolledCarousel items={carouselItems} />
            </div>
        )
    }
}



