import { motion } from "framer-motion";

import "./world.scss";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className="world">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="world__container"
    >
      <TypingText title="| People on the World" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="world__img-cont"
      >
        <img src="./map.png" alt="map" className="world__map" />

        <div className="world__human world__human_arabic">
          <img src="./people-02.png" alt="people" className="" />
        </div>

        <div className="world__human world__human_australia">
          <img src="./people-01.png" alt="people" className="" />
        </div>

        <div className="world__human world__human_africa">
          <img src="./people-03.png" alt="people" className="" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
