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
          <div className="flex-grow lg:w-[80%] lg:mr-20">
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
              <div className="border-b border-gray-800 border-opacity-20 pb-10 mb-10">
                <form>
                  <p className="text-sm mb-2">YOUR CONDOLENCE</p>
                  <textarea className="w-full min-h-[200px] h-full border border-[#800000] border-opacity-40 rounded-lg break-words mb-8"></textarea>

                  {/* form actions */}
                  <div className="flex flex-col space-y-3 md:flex-row items-center md:space-x-3 w-full">
                    <button
                      type="submit"
                      className="w-full h-14 bg-[#800000] bg-opacity-80 text-white rounded-md font-semibold text-base md:text-xl"
                    >
                      Post condolence
                    </button>

                    <button className="w-full h-14 border border-[#800000] border-opacity-80 text-[#800000] text-opacity-80 rounded-md font-semibold text-base md:text-xl">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>

              {/* hidden a tag */}
              <a id="messages">
                <p className="text-gray-600 font-semibold text-lg xl:text-2xl mb-4">
                  Messages
                </p>
              </a>

              {/* posted condolence messages */}
              <div className="border-b border-gray-800 border-opacity-20 pb-10 mb-10">
                {/* photograph if any */}
                <div className="md:max-w-[600px] xl:max-w-[700px] mb-3">
                  <img
                    src="/images/deeOgbo/chesterAndWife2.jpg"
                    alt=""
                    className="object-cover rounded-md"
                  />
                </div>

                {/* message info */}
                <div className="flex items-center space-x-3 xl:space-x-4">
                  <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px] mb-3">
                    <Image
                      src="/images/deeOgbo/chesterAndWife2.jpg"
                      alt=""
                      quality="100"
                      layout="fill"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-lg xl:text-xl font-semibold text-[#800000]">
                    Opeyemi Philips
                  </p>
                </div>

                {/* message */}
                <div className="mb-4">
                  <p className="break-words">
                    We will miss you so much Aunty, you are one selfless woman
                    whose middle name is Care. You cared so much for your
                    children and went the extra mile to make sure they all have
                    a good start in life. You cared for your lovely husband till
                    you had your last breathe. You cared so much for me even in
                    my growing years as Okponku, when many were not able to, you
                    understood my personality and encouraged me in manyways
                    possible that assisted to shape the me of today. Thank you
                    for those smile that were always brightening the mood of
                    others regardless of what they are going through. Those deep
                    conversations that touched on life values will be missed. I
                    will also not forget your positive confessions and your
                    complete and absolute trust in the abilities of God to do
                    all things. We looked forward to joining you in church to
                    share the testimony of your healing as you confessed, but
                    your maker has a better plan of rest for you which we cannot
                    question. Paul said to live is for Christ and to die is
                    gain. Heaven rejoices over your appearing. Hallelujah.
                  </p>
                </div>

                {/* date message was shared */}
                <div>
                  <p className="text-sm text-blue-600">
                    Shared on Sept, 9, 2021, 12:56 p.m. WAT
                  </p>
                </div>
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
