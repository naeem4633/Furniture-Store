import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MovingImages = () => {
  return (
    <div className="w-full">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
        <div>
          <img src="../images/sample-image.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="../images/sample-image-2.jpg" alt="Slide 2" />
        </div>
      </Carousel>
    </div>
  )
}
export default MovingImages;