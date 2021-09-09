import React from "react";
import NextLink from "next/link";

function Footer() {
  return (
    <div className="flex items-center space-x-1 text-center justify-center text-xs md:text-sm w-full  md:w-[97%] lg:w-[90%] xl:w-[70%] md:mr-auto md:ml-auto bg-white pb-5 mb-2">
      <p>Created with love by </p>
      <NextLink href="https://ukasoanya.com/">
        <p className="text-[#800000]">Charles Ukasoanya</p>
      </NextLink>
      <p> (For the Ukandu family)</p>
    </div>
  );
}

export default Footer;
