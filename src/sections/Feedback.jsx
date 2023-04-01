import { motion } from "framer-motion";

import "./feedback.scss";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className="feedback">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="feedback__container"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="feedback__overview"
      >
        <div className="" />
        <div>
          <h4 className="feedback__name">Samantha</h4>
          <p className="feedback__post">Founder Metaverus</p>
        </div>

        <p className="feedback__description">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="feedback__world"
      >
        <img src="/planet-09.png" alt="planet-09" className="feedback__img" />

        <motion.div variants={zoomIn(0.4, 1)} className="">
          <img src="/stamp.png" alt="stamp" className="" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
