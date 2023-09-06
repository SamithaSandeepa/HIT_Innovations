import styles from "./style";
import React, { useEffect, useState } from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

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
          {/* <Stats /> */}
          <Business />
          {/* <Billing /> */}
          {/* <CardDeal /> */}
          {/* <Testimonials /> */}
          {/* <Clients /> */}
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
