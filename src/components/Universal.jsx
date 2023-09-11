import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";

const Universal = () => (
  <>
    <section id="universal">
      <div className="bg-primary py-5 px-5">
        <Link
          to="/"
          className="px-4 py-2 font-poppins font-medium text-[16px] text-blue-500 bg-primary border border-blue-500 rounded-[10px] outline-none hover:bg-blue-500 hover:text-primary "
        >
          &lt;&nbsp;Back
        </Link>
      </div>
    </section>
    <section className="container mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h2 className={styles.headingwhite}>UNIVERSAL ENERGY</h2>
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-bla ss:leading-[100.8px] leading-[75px] uppercase pt-10">
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
    </section>
  </>
);

export default Universal;
