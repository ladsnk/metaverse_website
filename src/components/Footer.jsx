import { motion } from "framer-motion";
import { socials } from "../constants";

import "./footer.scss";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="footer"
  >
    <div className="footer__container">
      <div className="footer__name">
        <h4 className="footer__idea">Enter the Metaverse</h4>
        <button type="button" className="footer__button">
          <img
            src="./headset.svg"
            alt="headset"
            className="footer__button-img"
          />
          <span className="footer__button-text">Enter Metaverse</span>
        </button>
      </div>

      <div className="footer__info">
        <div className="footer__line" />

        <div className="footer__details">
          <h4 className="footer__title">METAVERUS</h4>
          <p className="footer__copyright">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>

          <div className="footer__socials">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
