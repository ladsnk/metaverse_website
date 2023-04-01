import { motion } from "framer-motion";

import "./insightCard.scss";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="insight-card"
  >
    <img src={imgUrl} alt="planet-01" className="insight-card__world" />
    <div className="insight-card__info">
      <div className="insight-card__text">
        <h4 className="insight-card__title">{title}</h4>
        <p className="insight-card__subtitle">{subtitle}</p>
      </div>

      <div className="insight-card__arrow-cont">
        <img src="./arrow.svg" alt="arrow" className="insight-card__arrow" />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
