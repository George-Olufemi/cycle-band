import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
  return(
    <Carousel 
        showArrows={true} 
        autoPlay={true} 
        interval={4000} 
        infiniteLoop="true" 
        useKeyboardArrows="true"
        emulateTouch="true"
        transitionTime="2000"
    >
            <div>
                <img src="/image 1 (1).png" alt="Bicycle Typeof" />
                <p className="legend mt-10">Tee bike</p>
            </div>
            <div>
                <img src="/image 1 (1).png" alt="Bicycle Typeof" />
                <p className="legend">Gear Bike</p>
            </div>
            <div>
                <img src="image 1 (1).png" alt="Bicycle Typeof" />
                <p className="legend">Hiking Bike #001</p>
            </div>
            <div>
                <img src="image 1 (1).png" alt="Bicycle Typeof" />
                <p className="legend">Sports Bike </p>
            </div>
    </Carousel>
  );
}
