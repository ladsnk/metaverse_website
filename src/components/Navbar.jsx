import "./navbar.scss";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="navbar"
  >
    <div className="navbar__gradient navbar__gradient_purple"></div>
    <div className="navbar__gradient navbar__gradient_white"></div>
    <div className="navbar__gradient navbar__gradient_blue"></div>

    <div className="navbar__content">
      <div className="navbar__gradient navbar__gradient_silver"></div>
      <img src="./search.svg" alt="search" className="navbar__search-icon" />
      <h2 className="navbar__title">METAVERSUS</h2>
      <img src="./menu.svg" alt="menu" className="navbar__menu-icon" />
    </div>
  </motion.nav>
);

export default Navbar;
