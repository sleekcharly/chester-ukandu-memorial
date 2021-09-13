import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import Head from "next/head";

function Header() {
  return (
    <header className="bg-white py-2 px-2">
      <Head>
        <title>Chester Ukandu</title>
        <meta
          name="description"
          content="In loving memory of Mr Chester Onyemaechi Ukandu. 21st June, 1953 - 10th August, 2021"
        />
        <meta property="image" content="/images/deeOgbo/chesterUkandu1.jpeg" />
      </Head>

      <div className="flex items-center space-x-3 md:w-[97%] md:mr-auto md:ml-auto lg:w-[90%] xl:w-[70%]">
        <div className="relative w-12 h-12 md:w-14 md:h-14 lg:h-16 lg:w-16">
          <Image
            src="/images/deeOgbo/chesterUkandu1.jpeg"
            alt="chester ukandu"
            quality="100"
            layout="fill"
            className="rounded-full"
          />
        </div>

        <NextLink href="/" passHref>
          <p
            className="text-lg md:text-xl lg:text-2xl cursor-pointer flex-grow"
            component="h1"
          >
            Dee Ogbo
          </p>
        </NextLink>
      </div>
    </header>
  );
}

export default Header;
