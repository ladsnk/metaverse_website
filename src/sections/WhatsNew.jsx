import { motion } from "framer-motion";

import "./whatsNew.scss";
import { newFeatures } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className="whats-new">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="whats-new__container"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="whats-new__text-cont"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className="whats-new__new-features">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className="whats-new__img-cont"
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="whats-new__img"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
