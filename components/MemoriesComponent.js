import React from "react";
import Hero from "./Hero";
import NavLinks from "./NavLinks";
import NextLink from "next/link";
import { MailIcon } from "@heroicons/react/outline";
import { PhotographIcon, BookOpenIcon } from "@heroicons/react/solid";
import Image from "next/image";

function MemoriesComponent() {
  return (
    <div className="bg-white rounded-md py-7 px-5 ">
      <Hero />

      {/* content */}
      <div className="mt-12">
        <NavLinks />

        {/* main */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex-grow lg:mr-20">
            {/* rsvp */}
            <div className="flex items-center mt-5 md:pl-10 md:pr-10 flex-grow border-b border-gray-800 border-opacity-20 pb-10 mb-10">
              <p className="flex-grow">
                Will you be at the funeral? Send your RSVP.
              </p>

              <NextLink href="/events" passHref>
                <span className="flex items-center space-x-2 p-2 w-auto border border-[#800000] border-opacity-50 rounded-md cursor-pointer">
                  <MailIcon className="w-6 h-6 text-[#800000] text-opacity-70" />
                  <p className="text-sm text-[#800000] text-opacity-70">
                    Respond
                  </p>
                </span>
              </NextLink>
            </div>

            {/* condolences and memories */}
            <div>
              <p className="text-gray-600 text-lg md:text-xl font-semibold mb-3">
                Memories & condolences
              </p>

              {/* buttons */}
              <div className="flex items-center space-x-5 mb-5">
                <div className="flex flex-col p-6 w-32 md:p-8 md:w-36 lg:p-10 lg:w-40 items-center border border-[#800000] border-opacity-60 rounded-lg cursor-pointer hover:bg-[#800000] hover:text-white  text-[#800000] text-opacity-80 group">
                  <PhotographIcon className="w-8 h-8  " />
                  <p className="text-base md:text-lg ">Photo</p>
                </div>

                <div className="flex flex-col p-6 w-32 md:p-8 md:w-36  lg:p-10 lg:w-40 items-center border border-[#800000] border-opacity-60 rounded-lg cursor-pointer hover:bg-[#800000] hover:text-white  text-[#800000] text-opacity-80 group">
                  <BookOpenIcon className="w-8 h-8  " />
                  <p className="text-base md:text-lg ">Condolence</p>
                </div>
              </div>

              {/* form */}
              <div>
                <form>
                  <p className="text-sm mb-2">YOUR CONDOLENCE</p>
                  <textarea className="w-full min-h-[200px] h-full border border-[#800000] border-opacity-40 rounded-lg break-words"></textarea>

                  {/* about you */}
                  <p className="text-sm mb-2">ABOUT YOU</p>
                  <div className="flex flex-col md:flex-row items-center md:space-x-3 w-full">
                    <input
                      type="text"
                      placeholder="First name"
                      className="border border-[#800000] border-opacity-40 rounded-md h-10 w-full px-2"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="border border-[#800000] border-opacity-40 rounded-md h-10 w-full px-2"
                    />
                  </div>

                  {/* form actions */}
                  <div className="flex flex-col md:flex-row items-center md:space-x-3 w-full">
                    <button>Post condolence</button>
                    <button>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* second burial card */}
          <div className="relative w-[250px] h-[600px] xl:w-[350px] xl:h-[750px] mr-auto ml-auto">
            <Image
              src="/images/deeOgbo/burialCard3.jpeg"
              alt=""
              quality="100"
              layout="fill"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoriesComponent;
