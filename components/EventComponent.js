import React, { useEffect, useState } from "react";
import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import Hero from "./Hero";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

function EventComponent({ session }) {
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
    <div className="bg-white rounded-md py-7 px-5">
      <Hero />

      {/* content */}
      <div className="mt-12">
        <NavLinks />

        {/* main */}

        {/* header */}
        <section className="mt-10 border-b border-gray-800 border-opacity-20 pb-10 mb-10">
          <p
            className="text-gray-600 text-xl md:text-2xl font-semibold mb-4"
            component="h2"
          >
            Funeral events
          </p>

          <a id="events_section">
            <p className="text-gray-600 text-xs md:text-base">
              Please RSVP below to help the organizers prepare accordingly
            </p>
          </a>
        </section>

        {/* burial details */}
        <section className="mt-10 border-b border-gray-800 border-opacity-20 pb-10 mb-10">
          <div className="flex flex-col space-y-3 lg:flex-row lg: items-center">
            <div className="lg:flex-grow">
              <p
                className="text-blue-600 text-xl md:text-2xl font-semibold mb-5"
                component="h3"
              >
                Burial
              </p>

              {/* rsvp */}
              <div className="mb-6">
                <p className="text-gray-600">Are you able to attend ?</p>

                <div className="flex items-center space-x-8 mt-2">
                  <span className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="yes"
                      checked={attending === "yes"}
                      onChange={handleAttendingChange}
                    />
                    <p className="text-gray-600">Attending</p>
                  </span>

                  <span className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="no"
                      checked={attending === "no"}
                      onChange={handleAttendingChange}
                    />
                    <p className="text-gray-600">Not Attending</p>
                  </span>
                </div>
              </div>

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

              {/*  burial card */}
              <div className="relative w-[300px] h-[250px] md:w-[600px] md:h-[400px] xl:w-[800px] xl:h-[600px]">
                <Image
                  src="/images/deeOgbo/burialCard.jpeg"
                  alt="Chester ukandu burial card"
                  quality="100"
                  layout="fill"
                />
              </div>

              {/* covid prcautions */}
              <section className="mt-10">
                <p
                  className="text-gray-600 text-sm md:text-base  mb-5"
                  component="h3"
                >
                  COVID-19 SAFETY PRECAUTIONS
                </p>

                <div>
                  <div className="flex items-center space-x-3">
                    <span className="relative w-8 h-8">
                      <Image
                        src="/images/masks-required.svg"
                        alt="mask icon"
                        quality="100"
                        layout="fill"
                      />
                    </span>
                    <p className="text-gray-700">Masks required</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="relative w-8 h-8">
                      <Image
                        src="/images/social-distancing.svg"
                        alt="mask icon"
                        quality="100"
                        layout="fill"
                      />
                    </span>
                    <p className="text-gray-700">Social distancing enforced</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="relative w-8 h-8">
                      <Image
                        src="/images/hand-sanitizer.svg"
                        alt="mask icon"
                        quality="100"
                        layout="fill"
                      />
                    </span>
                    <p className="text-gray-700">
                      Hand sanitizer will be available
                    </p>
                  </div>
                </div>

                {/* map */}
                <div className="w-[90%] mr-auto ml-auto mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992.984664858135!2d7.38168982921723!3d5.4262903348489795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjUnMzQuNiJOIDfCsDIyJzU2LjEiRQ!5e0!3m2!1sen!2sng!4v1631191813390!5m2!1sen!2sng"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </section>
            </div>

            {/* second burial card */}
            <div className="relative w-[250px] h-[600px] xl:w-[350px] xl:h-[750px]">
              <Image
                src="/images/deeOgbo/burialCard3.jpeg"
                alt=""
                quality="100"
                layout="fill"
                className="rounded-md"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EventComponent;
