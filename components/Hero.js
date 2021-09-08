import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-auto">
      {/* Hero meta */}
      <div className="md:mb-7">
        <div className="mb-2">
          <p className="text-sm text-gray-600">IN LOVING MEMORY OF</p>
          <p className="text-xl lg:text-3xl font-semibold" component="h1">
            Mr. Chester Onyemaechi Ukandu
          </p>
        </div>

        {/* Date */}
        <div className="w-auto flex items-center">
          <p className="text-base flex-grow">
            21st June, 1953 - 10th August, 2021
          </p>

          <span className="flex space-x-2 items-center">
            <HeartIcon className="w-h h-5 lg:w-6 lg:h-6 text-red-600" />

            <p className="text-sm text-gray-600">Heart</p>
          </span>
        </div>
      </div>

      {/* Hero images */}
      <div className="hidden lg:block w-full">
        {/* image grid for large screens */}
        <div className="flex items-center justify-center w-full">
          <div className="relative w-[50%] h-[500px]">
            <Image
              src="/images/deeOgbo/chesterUkandu4.jpg"
              alt="chester ukandu"
              quality="100"
              layout="fill"
            />
          </div>

          <div className="grid grid-col-2 w-[50%] h-[500px]">
            <div className="flex">
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

            <div className="flex">
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
