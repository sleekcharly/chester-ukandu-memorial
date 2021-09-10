import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hero() {
  return (
    <section className="w-auto">
      {/* carousel for mobile */}
      <div className="lg:hidden">
        <section className="relative mt-1 shadow-lg max-w-screen-2xl mx-auto w-full h-[300px] mb-4">
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
                src="/images/deeOgbo/chesterUkandu4.jpg"
                alt="Chester Ukandu and Grand children"
                className="w-full h-[300px] object-contain"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="/images/deeOgbo/chesterAndWife3.jpeg"
                alt=""
                className="w-full h-[300px] object-contain"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="/images/deeOgbo/chesterAndGrandChildren3.jpeg"
                alt=""
                className="w-full h-[300px] object-contain"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="/images/deeOgbo/chesterWorkoutWithGrandChildren.jpeg"
                alt=""
                className="w-full h-[300px] object-contain"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="/images/deeOgbo/chesterUkanduAndSecondSonFamily.jpg"
                alt=""
                className="w-full h-[300px] object-contain"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="/images/deeOgbo/chesterChichiDaughterInlaw.jpg"
                alt=""
                className="w-full h-[300px] object-contain"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="/images/deeOgbo/chesterUkandu2.JPG"
                alt=""
                className="w-full h-[300px] object-contain"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="/images/deeOgbo/chesterUkanduWalk.jpg"
                alt=""
                className="w-full h-[300px] object-contain"
              />
            </div>
          </Carousel>
        </section>
      </div>

      {/* Hero meta */}
      <div className="md:mb-7">
        <div className="mb-2">
          <p className="text-sm text-gray-600">IN LOVING MEMORY OF</p>
          <p className="text-xl lg:text-3xl font-semibold" component="h1">
            Mr. Chester Onyemaechi Ukandu
          </p>
        </div>

        {/* Date */}
        <div className="w-auto ">
          <p className="text-base ">21st June, 1953 - 10th August, 2021</p>
        </div>
      </div>

      {/* Hero images */}
      <div className="hidden lg:block w-full">
        {/* image grid for large screens */}
        <div className="flex items-center justify-center w-full space-x-1">
          <div className="relative w-[50%] h-[500px]">
            <Image
              src="/images/deeOgbo/chesterUkandu4.jpg"
              alt="chester ukandu"
              quality="100"
              layout="fill"
            />
          </div>

          <div className="grid grid-col-2 w-[50%] h-[500px] gap-1">
            <div className="flex space-x-1">
              <div className="relative w-[50%] h-[250px]">
                <Image
                  src="/images/deeOgbo/chesterAndWife3.jpeg"
                  alt="chester ukandu"
                  layout="fill"
                  quality="100"
                />
              </div>

              <div className="relative w-[50%] h-[250px]">
                <Image
                  src="/images/deeOgbo/chesterAndGrandChildren3.jpeg"
                  alt="chester ukandu"
                  layout="fill"
                  quality="100"
                />
              </div>
            </div>

            <div className="flex space-x-1">
              <div className="relative w-[50%] h-[250px]">
                <Image
                  src="/images/deeOgbo/chesterWorkoutWithGrandChildren.jpeg"
                  alt="chester ukandu"
                  layout="fill"
                  quality="100"
                />
              </div>

              <div className="relative w-[50%] h-[250px]">
                <Image
                  src="/images/deeOgbo/chesterUkanduAndSecondSonFamily.jpg"
                  alt="chester ukandu"
                  layout="fill"
                  quality="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
