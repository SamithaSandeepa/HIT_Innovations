import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        OUR <br className="sm:block hidden" /> PARTNERS
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
      In order to get the greatest solar panels and inverters, we have worked with tier-one solar manufacturers worldwide.<br/>
       Local vendors have also provided us with durable mounting structures that are perfect for our region's environment and weather.<br/>
      We carefully choose our partners, which enables us to offer the best solar systems in Sri Lanka at the most competitive costs.<br/>
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
