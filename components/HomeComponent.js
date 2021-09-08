import React, { useState } from "react";
import { ArrowRightIcon, PhotographIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon, ClockIcon } from "@heroicons/react/solid";
import Hero from "./Hero";
import NextLink from "next/link";
import Image from "next/image";

function HomeComponent() {
  //  define component state
  const [attending, setAttending] = useState("");

  // handle changing attending radio box.
  const handleAttendingChange = (event) => {
    setAttending(event.target.value);
  };

  console.log("attending: " + attending);

  return (
    <div className="bg-white rounded-md py-7 px-5 ">
      <Hero />

      {/* content */}
      <div className="mt-12">
        <nav className="flex items-center justify-between md:space-x-8 md:justify-start md:pl-8 border-b border-gray-800 border-opacity-20 pb-4">
          <a href="/" className="nav-link group">
            <span className="span">About</span>
          </a>

          <a href="/events" className="nav-link group">
            <span className="span">Events</span>
          </a>

          <a href="/obituary" className="nav-link group">
            <span className="span">Obituary</span>
          </a>

          <a href="/memories" className="nav-link group">
            <span className="span">Memories</span>
          </a>
        </nav>

        {/* main */}
        <div className="w-full mt-8">
          <div className="w-full">
            {/* condolence input */}
            <div className="w-full md:w-[80%] flex items-center">
              <NextLink href="/memories" passHref>
                <p className="text-sm p-3 text-gray-500 border border-gray-500 border-opacity-40 rounded-2xl flex-grow mr-5 cursor-pointer">
                  Share your condolences ...
                </p>
              </NextLink>

              <a
                href="/memories"
                className="flex items-center space-x-2 border border-[#800000] border-opacity-40 p-2 rounded-xl"
              >
                <PhotographIcon className="w-6 h-6 text-[#800000]" />
                <p className="text-sm text-[#800000]">Photo</p>
              </a>
            </div>

            {/* funeral details */}
            <div className="mt-8 border-t pt-10 border-gray-800 border-opacity-20">
              {/* funeral title */}
              <p
                className="text-gray-600 text-xl md:text-2xl font-semibold mb-4"
                component="h2"
              >
                Funeral details
              </p>

              {/* burial header */}
              <p
                className="text-blue-600 text-xl md:text-2xl font-semibold mb-5"
                component="h3"
              >
                Burial
              </p>

              {/* rsvp */}
              <div className="mb-6">
                <p className="text-gray-600">Are you able to attend ?</p>

                <div className="flex items-center space-x-8 mt-2">
                  <span className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="yes"
                      checked={attending === "yes"}
                      onChange={handleAttendingChange}
                    />
                    <p className="text-gray-600">Attending</p>
                  </span>

                  <span className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="no"
                      checked={attending === "no"}
                      onChange={handleAttendingChange}
                    />
                    <p className="text-gray-600">Not Attending</p>
                  </span>
                </div>
              </div>

              {/* burial time */}
              <div className="flex items-center space-x-2 mb-4">
                <ClockIcon className="w-6 h-6 text-gray-600" />
                <p className="text-gray-600 text-xs md:text-base">
                  Starts on Friday, October 15, 2021 at 10a.m. WAT
                </p>
              </div>

              {/* burial location */}
              <div className="flex items-center space-x-2 mb-5">
                <LocationMarkerIcon className="w-6 h-6 text-gray-600" />
                <p className="text-gray-600 text-xs md:text-base">
                  Isiala-Ngwa North LGA, Abia State.
                </p>
              </div>

              {/* additional details */}
              <NextLink href="/events" passHref>
                <span className="flex items-center space-x-2 cursor-pointer border-b border-gray-800 border-opacity-20 pb-10 mb-10">
                  <p className="text-[#800000] text-base lg:text-xl font-semibold">
                    See additional details
                  </p>
                  <ArrowRightIcon className="w-6 h-6 text-[#800000]" />
                </span>
              </NextLink>

              {/* Obituary section */}
              <p
                className="text-gray-600 text-xl md:text-2xl font-semibold mb-4"
                component="h2"
              >
                Obituary
              </p>

              <p className="text-gray-600 text-xs md:text-base mb-5">
                On Monday August 10, 2021 our beloved Husband, Father,
                Grandfather, Brother, Uncle and friend, Chester Onyemaechi
                Ukandu passed on to eternal glory. He is survived by his loving
                Wife, 5 children, Daughter-in-laws, Son-in-law and
                Grandchildren.
              </p>

              {/* additional details */}
              <NextLink href="/obituary" passHref>
                <span className="flex items-center space-x-2 cursor-pointer border-b border-gray-800 border-opacity-20 pb-10 mb-10">
                  <p className="text-[#800000] text-base lg:text-xl font-semibold">
                    Go to full obituary
                  </p>
                  <ArrowRightIcon className="w-6 h-6 text-[#800000]" />
                </span>
              </NextLink>
            </div>

            {/* Obituary section */}
            <div>
              <p
                className="text-gray-600 text-xl md:text-2xl font-semibold mb-4"
                component="h2"
              >
                Memories & condolences
              </p>

              {/* memories */}
              <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 mb-2">
                <div className="relative w-full h-[250px] md:w-[315px] md:h-[245px] lg:w-[440px] lg:h-[335px] shadow-sm hover:shadow-2xl transition-all">
                  <Image
                    src="/images/deeOgbo/chesterUkanduAndSecondSonFamily.jpg"
                    alt="chester ukandu"
                    layout="fill"
                    quality="100"
                    className="rounded-md"
                  />
                </div>
                <div className="relative w-full h-[250px] md:w-[315px] md:h-[245px] lg:w-[440px] lg:h-[335px] shadow-sm hover:shadow-2xl transition-all">
                  <Image
                    src="/images/deeOgbo/chesterUkanduAndSecondSonFamily.jpg"
                    alt="chester ukandu"
                    layout="fill"
                    quality="100"
                    className="rounded-md"
                  />
                </div>
              </div>

              {/* condolence messages */}
              <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2">
                <div className="w-full h-[250px] md:w-[315px] md:h-[245px] lg:w-[440px] lg:h-[335px] border border-gray-100 p-2 rounded-lg shadow-sm hover:shadow-2xl transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px] ">
                      <Image
                        src="/images/deeOgbo/thirdDaughterAndHusband.jpeg"
                        alt="third daughter"
                        layout="fill"
                        quality="100"
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-base lg:text-lg xl:text-xl">user name</p>
                  </div>

                  {/* message */}

                  <p className="text-base text-gray-600">
                    We will miss you so much Aunty, you are one selfless woman
                    whose middle name is Care. You cared so much for your
                    children
                  </p>
                </div>

                <div className="w-full h-[250px] md:w-[315px] md:h-[245px] lg:w-[440px] lg:h-[335px] border border-gray-100 p-2 rounded-lg shadow-sm hover:shadow-2xl transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px] ">
                      <Image
                        src="/images/deeOgbo/thirdDaughterAndHusband.jpeg"
                        alt="third daughter"
                        layout="fill"
                        quality="100"
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-base lg:text-lg xl:text-xl">user name</p>
                  </div>

                  {/* message */}

                  <p className="text-base text-gray-600">
                    We will miss you so much Aunty, you are one selfless woman
                    whose middle name is Care. You cared so much for your
                    children
                  </p>
                </div>
              </div>
            </div>

            {/* additional details */}
            <NextLink href="/memories" passHref>
              <span className="flex items-center space-x-2 cursor-pointer border-b border-gray-800 border-opacity-20 pb-10 mb-10 mt-8">
                <p className="text-[#800000] text-base lg:text-xl font-semibold">
                  See all memories
                </p>
                <ArrowRightIcon className="w-6 h-6 text-[#800000]" />
              </span>
            </NextLink>

            {/* family section */}
          </div>

          <div className="hidden md:block md:w-80"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
