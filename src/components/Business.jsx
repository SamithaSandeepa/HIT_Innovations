import { features } from "../constants";
import React, { useState, useEffect } from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { Link } from "react-router-dom";
// import Zoom from "react-reveal/Zoom";
import { useStateContext } from "../context/ContextProvider";
// import Bounce from "react-reveal/Zoom";

const FeatureCard = ({ icon, title, content, link, index }) => {
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
    }, 5000);

    return () => {
      // Clean up the timeout if the component unmounts
      clearTimeout(timeout);
    };
  }, [setLoading]);

  return (
    <>
      {/* <Zoom> */}
      <div
        className={`flex flex-col rounded-[20px] shadow-inner hover:bg-opacity-25 hover:bg-gray-500 hover:shadow-lg p-5 hover:scale-105 duration-300 ${
          index !== features.length - 1 ? "mb-0" : "mb-0"
        } `}
      >
        {!imageLoaded && (
          <div className="flex flex-col rounded-[20px] shadow-inner bg-opacity-25 bg-gray-500 hover:shadow-lg p-5 hover:scale-105 duration-300">
            <div className="spinner">Loading...</div>
          </div>
        )}

        {imageLoaded && (
          <Link to={link}>
            <div className="max-w-sm rounded overflow-hidden">
              {/* <Bounce> */}
              <div className="flex justify-center items-center ">
                <img
                  src={icon}
                  alt="billing"
                  className="w-full h-full p-5"
                  onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when the image has loaded
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{title}</div>
                <p className="text-gray-400 text-base">{content}</p>
              </div>
              {/* </Bounce> */}
            </div>
          </Link>
        )}
      </div>
      {/* </Zoom> */}
    </>
  );
};

const Business = () => {
  return (
    <section id="features">
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
      <div className={`block lg:hidden flex-col ${styles.flexCenter}`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
