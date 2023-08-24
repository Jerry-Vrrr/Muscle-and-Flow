import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Before1 from "../Images/Before1.png";
import Before2 from "../Images/Before2.png";
import Before3 from "../Images/Before3.png";
import Before4 from "../Images/Before4.png";




import React from 'react'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export default function ImageCarousel() {
  return (
    <div className='carousel'>
        <h1>Are You Ready For Some Real Results?</h1>

      <Carousel
  swipeable={false}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  customTransition="all 1"
  transitionDuration={1000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  // itemClass="carousel-item-padding-40-px"
>
  <div className="before"><img  src={Before1} alt="before-and-after" /></div>
  <div className="before"><img  src={Before2} alt="before-and-after" /></div>
  <div className="before"><img  src={Before3} alt="before-and-after" /></div>
  <div className="before"><img  src={Before4} alt="before-and-after" /></div>
</Carousel>
    </div>
    
  )
}



  

