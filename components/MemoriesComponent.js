import React, { useRef, useState, useEffect } from "react";
import Hero from "./Hero";
import NavLinks from "./NavLinks";
import NextLink from "next/link";
import { MailIcon } from "@heroicons/react/outline";
import { PhotographIcon, BookOpenIcon } from "@heroicons/react/solid";
import Image from "next/image";
import axios from "axios";
import dayjs from "dayjs";

function MemoriesComponent({ session }) {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [posts, setPosts] = useState([]);

  const addImageToPost = (event) => {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setThumbnail(readerEvent.target.result);
    };
  };

  //brigg in posts
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      axios
        .get("/api/get-memories")
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    return () => (mounted = false);
  }, []);

  //   handle submitting of messages and condolences
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputRef.current.value) return;

    const condolenceMessage = {
      body: inputRef.current.value,
      memory: thumbnail,
      username: session.user.name,
      userImage: session.user.image,
    };

    // post message
    axios
      .post(`/api/post-memories`, condolenceMessage)
      .then((data) => {
        // setThumbnail(null);
        inputRef.current.value = "";
        window.location.reload();
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

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
              <a id="leave-a-message" className="hidden" />
              <p className="text-gray-600 text-lg md:text-xl font-semibold mb-3">
                Memories & condolences
              </p>

              {/* buttons */}
              {/* <div className="flex items-center space-x-5 mb-5">
                <div
                  className="flex flex-col p-6 w-32 md:p-8 md:w-36 lg:p-10 lg:w-40 items-center border border-[#800000] border-opacity-60 rounded-lg cursor-pointer hover:bg-[#800000] hover:text-white  text-[#800000] text-opacity-80 group"
                  onClick={() => filePickerRef.current.click()}
                >
                  <PhotographIcon className="w-8 h-8  " />
                  <p className="text-base md:text-lg ">Photo</p>
                  <input
                    onChange={addImageToPost}
                    type="file"
                    ref={filePickerRef}
                    className="hidden"
                  />
                </div>

                {thumbnail && (
                  <div className=" rounded-lg cursor-pointer ">
                    <img
                      src={thumbnail}
                      alt=""
                      className="object-cover w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
                    />
                  </div>
                )}
              </div> */}

              {/* form */}
              <div className="border-b border-gray-800 border-opacity-20 pb-10 mb-10">
                <form onSubmit={handleSubmit}>
                  <p className="text-sm mb-2">YOUR CONDOLENCE</p>
                  <textarea
                    className="w-full min-h-[200px] h-full border border-[#800000] border-opacity-40 rounded-lg break-words mb-8"
                    ref={inputRef}
                    placeholder={`Welcome ${session.user.name}, kindly place your condolence message.`}
                  ></textarea>

                  {/* form actions */}
                  <div className="flex flex-col space-y-3 md:flex-row items-center md:space-x-3 w-full">
                    <button
                      type="submit"
                      className="w-[30%] h-14 bg-[#800000] bg-opacity-80 text-white rounded-md font-semibold text-base md:text-xl"
                    >
                      Post condolence
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
              {posts &&
                posts.map((post) => (
                  <div
                    className="border-b border-gray-800 border-opacity-20 pb-10 mb-10"
                    key={post.postId}
                  >
                    {/* photograph if any */}
                    {/* <div className="md:max-w-[600px] xl:max-w-[700px] mb-3">
                  <img
                    src="/images/deeOgbo/chesterAndWife2.jpg"
                    alt=""
                    className="object-cover rounded-md"
                  />
                </div> */}

                    {/* message info */}
                    <div className="flex items-center space-x-3 xl:space-x-4">
                      <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px] mb-3">
                        <Image
                          src={post.messengerImage}
                          alt=""
                          quality="100"
                          layout="fill"
                          className="rounded-full"
                        />
                      </div>
                      <p className="text-lg xl:text-xl font-semibold text-[#800000]">
                        {post.messenger}
                      </p>
                    </div>

                    {/* message */}
                    <div className="mb-4">
                      <p className="break-words">{post.body}</p>
                    </div>

                    {/* date message was shared */}
                    <div>
                      <p className="text-sm text-blue-600">
                        {`Shared on ${dayjs(post.createdAt).format(
                          "MMMM D, YYYY h:mm A"
                        )} WAT`}
                      </p>
                    </div>
                  </div>
                ))}
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
