import React, { useRef, useState, useEffect } from "react";
import Hero from "./Hero";
import NavLinks from "./NavLinks";
import NextLink from "next/link";
import { MailIcon } from "@heroicons/react/outline";
import { PhotographIcon, BookOpenIcon } from "@heroicons/react/solid";
import Image from "next/image";
import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/router";
// suneditor stuff
import SunEditor from "suneditor-react";
// Import Sun Editor's CSS File
import "suneditor/dist/css/suneditor.min.css";

function MemoriesComponent({ session }) {
  const [body, setBody] = useState("");
  const filePickerRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [posts, setPosts] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({
    firstname: null,
    lastName: null,
    body: null,
  });

  //   set router
  const router = useRouter();

  const addImageToPost = (event) => {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setThumbnail(readerEvent.target.result);
    };
  };

  //   handle form change
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
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

  // handle editor change
  const handleEditorChange = (content) => {
    const data = content;
    setBody(data);
  };

  //   handle submitting of messages and condolences
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!body || body == "<p><br></p>") {
      setErrors({ body: "Please enter your condolence message !" });
      return;
    }

    if (firstName === "") {
      setErrors({ firstName: "Please enter your first name !" });
      return;
    }

    if (lastName === "") {
      setErrors({ lastName: "Please enter your last name !" });
      return;
    }

    const condolenceMessage = {
      body: body,
      memory: thumbnail,
      firstName: firstName,
      lastName: lastName,
    };

    // post message
    axios
      .post(`/api/post-memories`, condolenceMessage)
      .then((data) => {
        // setThumbnail(null);
        setBody("");
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
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="flex-grow lg:w-[80%] lg:mr-20">
            {/* condolences and memories */}
            <div>
              <a id="leave-a-message" className="hidden" />
              <p className="text-gray-600 text-lg md:text-xl font-semibold mb-7">
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

                  {/* name section */}
                  <div className="mb-5 flex flex-col space-y-3 md:flex-row md:space-x-5 md:items-center md:cont">
                    <span>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        className="placeholder-gray-400 border border-[#800000] border-opacity-40 rounded-lg break-words p-1 h-10"
                      />
                      {errors && errors.firstName ? (
                        <p className="text-sm text-red-600">
                          {errors.firstName}
                        </p>
                      ) : null}
                    </span>

                    <span>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={lastName}
                        onChange={handleLastNameChange}
                        className="placeholder-gray-400 border border-[#800000] border-opacity-40 rounded-lg break-words  p-1 h-10"
                      />
                      {errors && errors.lastName ? (
                        <p className="text-sm text-red-600">
                          {errors.lastName}
                        </p>
                      ) : null}
                    </span>
                  </div>

                  <div className="mb-8">
                    <SunEditor
                      height="auto"
                      width="auto"
                      setContents={body}
                      onChange={handleEditorChange}
                      setOptions={{
                        buttonList: [
                          [
                            "font",
                            "fontSize",
                            "bold",
                            "italic",
                            "blockquote",
                            "align",
                          ],
                        ],
                        minHeight: "200",
                        defaultStyle: "font-size: 18px",
                        placeholder:
                          "Welcome friend kindly place your condolence message.",
                      }}
                    />

                    {errors && errors.body ? (
                      <p className="text-sm text-red-600">{errors.body}</p>
                    ) : null}
                  </div>

                  {/* form actions */}
                  <div className="flex flex-col space-y-3 md:flex-row items-center md:space-x-3 w-full">
                    <button
                      type="submit"
                      className="w-[80%] md:w-[30%] h-14 bg-[#800000] bg-opacity-80 text-white rounded-md font-semibold text-base md:text-xl"
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
                      <p className="text-xl xl:text-2xl font-semibold text-gray-700">
                        By
                      </p>
                      <p className="text-lg xl:text-xl font-semibold text-[#800000]">
                        {post.fullname}
                      </p>
                    </div>

                    {/* message */}
                    <div className="mb-4">
                      <SunEditor
                        setContents={post.body}
                        disable={true}
                        showToolbar={false}
                        height="auto"
                        setOptions={{
                          defaultStyle: "font-size: 18px",
                        }}
                      />
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
