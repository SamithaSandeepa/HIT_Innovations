import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-col rounded-[20px]  shadow-inner hover:bg-opacity-25 hover:bg-gray-500 hover:shadow-lg p-5 hover:scale-105 duration-300 ${
      index !== features.length - 1 ? "mb-0" : "mb-0"
    } `}
  >
    {/* hover:shadow-lg-cyan-500/50 */}
    <div className="max-w-sm rounded overflow-hidden">
      <div className="flex justify-center items-center ">
        <img
          className=""
          src={icon}
          alt="Sunset in the mountains"
          width="100%"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-400 text-base">{content}</p>
      </div>
    </div>
  </div>
);

const Business = () => (
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

export default Business;
