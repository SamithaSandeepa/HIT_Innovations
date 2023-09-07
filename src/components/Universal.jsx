import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Universal = () => (
  <section id="product">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <h2 className={styles.heading2}>Universal Energy</h2>
    </div>
  </section>
);

export default Universal;
