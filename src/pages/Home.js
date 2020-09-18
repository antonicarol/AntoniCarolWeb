import React from "react";
import "./css/Home.css";
import { Icon } from "@iconify/react";
import bxlTwitter from "@iconify/icons-bx/bxl-twitter";
import linkedinIcon from "@iconify/icons-entypo-social/linkedin";
import instagramIcon from "@iconify/icons-entypo-social/instagram";
import bxlGithub from "@iconify/icons-bx/bxl-github";
import { motion } from "framer-motion";
import { pageAppearFromRight } from "../animations/variants";

function Home() {
  return (
    <motion.div
      variants={pageAppearFromRight}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home"
    >
      <div className="home__info">
        <h1>{"<Antoni Carol Mateo />"}</h1>
        <p>
          I'm a Spanish FullStack Developer. Motivated and passionate with my
          work and with a lot of hype to show the world my skills. Confident,
          easy-going and stubborn with being capable of anything I purpose to
          myself.
        </p>
        <div className="home__icons">
          <Icon icon={bxlTwitter} color="white" />
          <Icon icon={linkedinIcon} color="white" />
          <Icon icon={instagramIcon} color="white" />
          <Icon icon={bxlGithub} color="white" />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
