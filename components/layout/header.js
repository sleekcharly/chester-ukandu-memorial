import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";

function Header() {
  // get user user session
  const { data, status } = useSession();

  return (
    <header className="bg-white py-2 px-2">
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

        <button
          className="text-base md:text-lg lg:text-xl cursor-pointer"
          onClick={() => (status === "authenticated" ? signOut() : signIn())}
        >
          {status === "authenticated" ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
}

export default Header;
