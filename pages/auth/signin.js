import React from "react";
import Header from "../../components/layout/header";
import NextLink from "next/link";
import Image from "next/image";
import { getProviders, getSession, signIn } from "next-auth/client";

export default function SignIn({ providers, session }) {
  console.log(providers);
  return (
    <div>
      <Header />

      {/* content */}
      <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mr-auto ml-auto mt-[100px] xl:mt-[70px] flex space-x-5">
        <div>
          <p
            className="text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-10 ml-4 md:ml-0"
            component="h1"
          >
            Please log in
          </p>

          <p className="text-lg md:text-xl mb-4 ml-4 md:ml-0">
            Log in with facebook to continue
          </p>

          {/* get provider */}
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-700 text-white font-semibold rounded-lg h-12 w-[250px] sm:w-[300px] text-lg md:text-xl py-3 ml-4 md:ml-0"
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: "https://chester-ukandu-memorial.vercel.app/",
                  })
                }
              >
                Log in with {provider.name}
              </button>
            </div>
          ))}

          <div className="flex items-center space-x-1 text-center  text-xs md:text-sm mr-auto ml-auto mt-20 w-full">
            <p>Created with love by </p>
            <NextLink href="https://ukasoanya.com/">
              <p className="text-[#800000] cursor-pointer">Charles Ukasoanya</p>
            </NextLink>
            <p> (For the Ukandu family)</p>
          </div>
        </div>

        {/* second burial card */}
        <div className=" hidden md:block relative w-[250px] h-[600px] xl:w-[350px] xl:h-[750px] mr-auto ml-auto">
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
  );
}

// get providers
export async function getServerSideProps(context) {
  const providers = await getProviders();
  // get the user
  const session = await getSession(context);

  return {
    props: { providers, session },
  };
}
