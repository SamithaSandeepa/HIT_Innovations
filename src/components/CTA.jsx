import styles from "../style";
import Button from "./Button";
import Wave from "react-wavify";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const CTA = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const SERVICE_ID = import.meta.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.REACT_APP_PUBLIC_KEY;
    emailjs
      .sendForm(
        SERVICE_ID, // Use config.serviceId
        TEMPLATE_ID, // Use config.templateId
        form.current,
        PUBLIC_KEY // Use config.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          // Check if the email was sent successfully
          if (result.status === 200) {
            // Reset the form fields
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="text-gray-700 body-font relative">
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className={styles.heading2}>Contact Us</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-dimWhite">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className="lg:w-4/5 md:w-2/3 mx-auto">
          <form className="flex flex-wrap -m-2" ref={form} onSubmit={sendEmail}>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-dimWhite">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-dimWhite">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-dimWhite"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="submit"
                value="Send"
                className="py-2 px-6 font-poppins font-medium text-[16px] text-orange-500 bg-primary border border-orange-500 rounded-[10px] outline-none hover:bg-orange-500 hover:text-primary"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
      <Wave mask="url(#mask)" fill="#1277b0">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
    </section>
  );
};

export default CTA;
