import { motion } from "framer-motion";

import "./exploreCard.scss";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "Inertia", index * 0.5, 0.75)}
    className={active === id ? "explore-card active" : "explore-card"}
    onClick={() => handleClick(id)}
  >
    <img src={imgUrl} alt={id} className="explore-card__img" />
    {active !== id ? (
      <h3 className="explore-card__title_normal">{title}</h3>
    ) : (
      <div className="explore-card__title_active">
        <div className="explore-card__headset-wrapper">
          <img
            src="./headset.svg"
            alt="headset"
            className="explore-card__headset"
          />
        </div>
        <p className="explore-card__intro">Enter Metaverse</p>
        <h2 className="explore-card__title">{title}</h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
