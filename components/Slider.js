import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <div>
      <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto w-full h-[500px]">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img
              loading="lazy"
              src="/images/deeOgbo-family/chesterAndGrandChildren1.jpeg"
              alt="Chester Ukandu and Grand children"
              className="w-full h-[500px] object-contain"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="/images/deeOgbo-family/chesterAndGrandChildren3.jpeg"
              alt=""
              className="w-full h-[500px] object-contain"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="/images/deeOgbo-family/grandChildren3.jpeg"
              alt=""
              className="w-full h-[500px] object-contain"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="/images/deeOgbo-family/grandChildren1.jpeg"
              alt=""
              className="w-full h-[500px] object-contain"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="/images/deeOgbo-family/grandChildren2.jpeg"
              alt=""
              className="w-full h-[500px] object-contain"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="/images/deeOgbo-family/chesterAndGrandChildren3.jpeg"
              alt=""
              className="w-full h-[500px] object-contain"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="/images/deeOgbo-family/chesterWorkoutWithGrandChildren2.jpeg"
              alt=""
              className="w-full h-[500px] object-contain"
            />
          </div>
        </Carousel>
      </section>
    </div>
  );
}

export default Slider;
