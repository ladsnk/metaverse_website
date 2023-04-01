import { motion } from "framer-motion";
import { TypingText } from "../components";

import "./about.scss";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="about"
  >
    <div className="about__gradient about__gradient_purple"></div>
    <div className="about__gradient about__gradient_green"></div>
    <div className="about__gradient about__gradient_pink"></div>
    <TypingText title="I About Metaversus" />

    <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="about__text">
      <strong>Metaverse</strong> is a new thing in the future, where you can
      enjoy the virtual world by feeling like it's really real, you can feel
      what you feel in this metaverse world, because this is really the{" "}
      <strong>madness of the metaverse</strong> of today, using only{" "}
      <strong>VR</strong> devices you can easily explore the metaverse world you
      want, turn your dreams into reality. Let's <strong>explore</strong> the
      madness of the metaverse by scrolling down
    </motion.p>

    <motion.img
      variants={fadeIn("up", "tween", 0.3, 1)}
      src="./arrow-down.svg"
      alt="arrow down"
      className="about__arrow"
    />
  </motion.section>
);

export default About;
