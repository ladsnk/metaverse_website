import "./hero.scss";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className="hero">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="hero__wrapper"
    >
      <div className="hero__gradient hero__gradient_blue"></div>
      <div className="hero__wrapper-title">
        <motion.h1 variants={textVariant(1.1)} className="hero__title">
          Metaverse
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="hero__wrapper-d">
          <h1 className="hero__title">Ma</h1>
          <div className="hero__letter-d" />
          <h1 className="hero__title">Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="hero__wrapper-img"
      >
        <img src="./cover.png" alt="cover" className="hero__img" />
        <a href="#explore">
          <div>
            <img src="./stamp.png" alt="stamp" className="hero__stamp" />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
