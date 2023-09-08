import styles from "./style";
import React, { useEffect, useState, CSSProperties } from "react";
// import { Routes } from "react-router-dom"; // Import Routes from react-router-dom
import {
  Business,
  CardDeal,
  Clients,
  Contactus,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import { ContextProvider } from "./context/ContextProvider";

const App = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      // Scrolling down
      setIsHidden(true);
    } else {
      // Scrolling up
      setIsHidden(false);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures that this effect runs only once, like componentDidMount

  return (
    <>
      <ContextProvider>
        <div className="bg-primary w-full overflow-hidden">
          <div className="fixed top-0 w-full z-10">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar onScroll={handleScroll} isHidden={isHidden} />
              </div>
            </div>
          </div>

          <div className={`bg-primary  ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              {/* <Routes /> */}
              <Business />
              {/* <CardDeal /> */}
              {/* <Testimonials /> */}
              {/* <Clients /> */}
              <Contactus />
              <Footer />
            </div>
          </div>
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
