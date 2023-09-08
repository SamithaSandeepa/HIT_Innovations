import styles from "../style";
import { discount, robot, envpicjpg } from "../assets";
import GetStarted from "./GetStarted";
import { useStateContext } from "../context/ContextProvider";
import React, { useState, useEffect } from "react";
// import Bounce from "react-reveal/Bounce";

const Hero = () => {
  const { setLoading } = useStateContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Activate loading while loading the image
    // setLoading(true);

    // Simulate loading the image for 5 seconds (replace this with your actual image loading logic)
    const timeout = setTimeout(() => {
      setImageLoaded(true);
      // Deactivate loading once the image has loaded
      setLoading(false);
    }, 3000);

    return () => {
      // Clean up the timeout if the component unmounts
      clearTimeout(timeout);
    };
  }, [setLoading]);

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] uppercase pt-10">
            high-intensity technology <br className="sm:block hidden" />{" "}
            <span className="text-orange-500 capitalize ">Innovations</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
          HIT Innovation's vision is to create and market smart products
          utilizing Industry 4.0 tech, addressing community needs, and enhancing
          quality of life by making technology accessible and affordable.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative w-[100%] h-[100%]">
          {!imageLoaded && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center rounded-lg justify-center bg-white opacity-10">
              {/* Display your spinning animation here */}
              <div className="w-12 h-12 border-t-4 border-orange-500 border-solid rounded-full animate-spin opacity-80"></div>
            </div>
          )}
          {/* <Bounce> */}
          {imageLoaded && (
            <img
              src={envpicjpg}
              alt="billing"
              className="w-full h-full p-5"
              onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when the image has loaded
            />
          )}
          {/* </Bounce> */}
        </div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      {/* 
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
