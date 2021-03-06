import React, { useState, useEffect } from "react";
import { ArrowRightIcon, PhotographIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon, ClockIcon } from "@heroicons/react/solid";
import Hero from "./Hero";
import NextLink from "next/link";
import Image from "next/image";
import Slider from "./Slider";
import NavLinks from "./NavLinks";
import { useRouter } from "next/router";
import axios from "axios";

function HomeComponent({ session }) {
  // set router
  const router = useRouter();

  //  define component state
  const [attending, setAttending] = useState("");
  const [attendanceUpdate, setAttendanceUpdate] = useState("");
  const [user, setUser] = useState({});

  // get user data
  useEffect(() => {
    if (session) {
      let username = session.user.name;

      axios
        .get(`/api/getUserData/${username}`)
        .then((res) => {
          setUser(res.data);
          setAttending(res.data.attending);
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    }
  }, [session]);

  // handle changing attending radio box.
  const handleAttendingChange = (event) => {
    if (session) {
      setAttending(event.target.value);

      let userData = { attending: event.target.value, name: session.user.name };

      //   update atttendance
      axios
        .post("/api/attending", userData)
        .then(() => {
          setAttendanceUpdate("success");
        })
        .catch((err) => {
          console.error(err.response.data);
          setAttendanceUpdate("failed");
        });
    } else {
      router.push("/auth/signin");
    }
  };

  return (
    <div className="bg-white rounded-md py-7 px-5 ">
      <Hero />

      {/* content */}
      <div className="mt-12">
        <NavLinks />

        {/* main */}

        <div className="w-full mt-8">
          {/* condolence input */}
          <div className="w-full md:w-[80%] flex items-center">
            <NextLink href="/condolences#leave-a-message" passHref>
              <p className="text-sm p-3 text-gray-500 border border-gray-500 border-opacity-40 rounded-2xl flex-grow mr-5 cursor-pointer">
                Share your condolences ...
              </p>
            </NextLink>

            <a
              href="/condolences"
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
            <NextLink href="/events#events_section" passHref>
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

            <p className="text-gray-600 text-xs md:text-base border-b border-gray-800 border-opacity-20 pb-10 mb-10">
              On Monday August 10, 2021 our beloved Husband, Father,
              Grandfather, Brother, Uncle and friend, Chester Onyemaechi Ukandu
              passed on to eternal glory. He is survived by his loving Wife, 5
              children, Daughter-in-laws, Son-in-law and Grandchildren.
            </p>
          </div>

          {/* memories section */}
          {/* <div>
            <p
              className="text-gray-600 text-xl md:text-2xl font-semibold mb-4"
              component="h2"
            >
              Memories & condolences
            </p> */}

          {/* memories */}
          {/* <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 mb-2">
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
            </div> */}

          {/* condolence messages */}
          {/* <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2">
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
                </div> */}

          {/* message */}

          {/* <p className="text-base text-gray-600">
                  We will miss you so much Aunty, you are one selfless woman
                  whose middle name is Care. You cared so much for your children
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
                </div> */}

          {/* message */}

          {/* <p className="text-base text-gray-600">
                  We will miss you so much Aunty, you are one selfless woman
                  whose middle name is Care. You cared so much for your children
                </p>
              </div>
            </div>
          </div> */}

          {/* additional details */}
          {/* <NextLink href="/memories#memories" passHref>
            <span className="flex items-center space-x-2 cursor-pointer border-b border-gray-800 border-opacity-20 pb-10 mb-10 mt-8">
              <p className="text-[#800000] text-base lg:text-xl font-semibold">
                See all memories
              </p>
              <ArrowRightIcon className="w-6 h-6 text-[#800000]" />
            </span>
          </NextLink> */}

          {/* family section */}
          <div>
            <p
              className="text-gray-600 text-xl md:text-2xl font-semibold mb-4"
              component="h2"
            >
              Survived by
            </p>

            {/* immediate family */}
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-5 md:flex-wrap ">
              <div className="flex items-center space-x-2">
                {/* image */}
                <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]">
                  <Image
                    src="/images/deeOgbo/julianaUkandu.jpg"
                    alt="Juliana Ukandu"
                    layout="fill"
                    quality="100"
                    className="rounded-full"
                  />
                </div>
                {/* meta */}
                <span>
                  <p className="text-base lg:text-xl">Juliana Ukandu</p>
                  <p className="text-gray-500">Wife</p>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {/* image */}
                <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]">
                  <Image
                    src="/images/deeOgbo-family/firstSonAndWife.jpg"
                    alt="Chimaobi Ukandu"
                    layout="fill"
                    quality="100"
                    className="rounded-full"
                  />
                </div>
                {/* meta */}
                <span>
                  <p className="text-base lg:text-xl">Chimaobi Ukandu</p>
                  <p className="text-gray-500">First Son</p>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {/* image */}
                <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]">
                  <Image
                    src="/images/deeOgbo-family/firstDaughter3.jpeg"
                    alt="Chinyere Ukandu"
                    layout="fill"
                    quality="100"
                    className="rounded-full"
                  />
                </div>
                {/* meta */}
                <span>
                  <p className="text-base lg:text-xl">Chinyere Ukandu</p>
                  <p className="text-gray-500">First daughter</p>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {/* image */}
                <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]">
                  <Image
                    src="/images/deeOgbo-family/kelechiUkandu.jpeg"
                    alt="Kelechi Ukandu"
                    layout="fill"
                    quality="100"
                    className="rounded-full"
                  />
                </div>
                {/* meta */}
                <span>
                  <p className="text-base lg:text-xl">Kelechi Ukandu</p>
                  <p className="text-gray-500">Second son</p>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {/* image */}
                <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]">
                  <Image
                    src="/images/deeOgbo-family/seconddaughter.jpeg"
                    alt="Ciemela Ukandu"
                    layout="fill"
                    quality="100"
                    className="rounded-full"
                  />
                </div>
                {/* meta */}
                <span>
                  <p className="text-base lg:text-xl">Chiemela Ukandu</p>
                  <p className="text-gray-500">Second daughter</p>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {/* image */}
                <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]">
                  <Image
                    src="/images/deeOgbo-family/thirdDaughter.jpeg"
                    alt="Ijeoma Ukandu"
                    layout="fill"
                    quality="100"
                    className="rounded-full"
                  />
                </div>
                {/* meta */}
                <span>
                  <p className="text-base lg:text-xl">Ijeoma Ukandu</p>
                  <p className="text-gray-500">Third daughter</p>
                </span>
              </div>
            </div>
          </div>

          {/* grand children section */}
          <div className="mt-10 border-b border-gray-800 border-opacity-20">
            <p className="text-gray-600 text-base lg:text-xl">GrandChildren</p>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
