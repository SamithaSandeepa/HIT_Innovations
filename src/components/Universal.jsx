import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";

const Universal = () => (
  <section id="product">
    <div className="bg-primary py-5 px-5">
      <Link
        to="/"
        className="px-4 py-2 font-poppins font-medium text-[16px] text-blue-500 bg-primary border border-blue-500 rounded-[10px] outline-none hover:bg-blue-500 hover:text-primary "
      >
        &lt;&nbsp;Back
      </Link>
    </div>
    <div className="container mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h2 className={styles.headingwhite}>UNIVERSAL ENERGY</h2>
      </div>
    </div>
  </section>
);

export default Universal;
