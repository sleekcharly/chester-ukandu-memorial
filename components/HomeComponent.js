import React, { useState } from "react";
import { PhotographIcon } from "@heroicons/react/outline";
import Hero from "./Hero";
import NextLink from "next/link";

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
              <div>
                <p className="text-gray-600">Are you able to attend ?</p>

                <div className="flex items-center space-x-8 mt-2">
                  <span className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="yes"
                      checked={attending === "yes"}
                      onChange={handleAttendingChange}
                    />
                    <p>Attending</p>
                  </span>

                  <span className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="no"
                      checked={attending === "no"}
                      onChange={handleAttendingChange}
                    />
                    <p>Not Attending</p>
                  </span>
                </div>
              </div>

              {/* burial time */}
              <div></div>

              {/* burial location */}
              <div></div>

              {/* additional details */}
              <div></div>
            </div>
          </div>

          <div className="hidden md:block md:w-80"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
