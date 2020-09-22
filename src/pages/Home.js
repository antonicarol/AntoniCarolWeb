import React from "react";
import "./css/Home.css";
import { Icon } from "@iconify/react";
import bxlTwitter from "@iconify/icons-bx/bxl-twitter";
import linkedinIcon from "@iconify/icons-entypo-social/linkedin";
import instagramIcon from "@iconify/icons-entypo-social/instagram";
import bxlGithub from "@iconify/icons-bx/bxl-github";
import bxlDiscord from "@iconify/icons-bx/bxl-discord";
import bxlTwitch from "@iconify/icons-bx/bxl-twitch";
import links from "../res/links";
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
        <h1>{"<Antoni Carol Mateo / >"}</h1>
        <p>
          I'm a Spanish FullStack Developer. Motivated and passionate with my
          work and with a lot of hype to show the world my skills. Confident,
          easy-going and stubborn with being capable of anything I purpose to
          myself.
        </p>
        <div className="home__icons">
          <Icon
            icon={bxlTwitter}
            onClick={() => window.open(links.twitter)}
            color="white"
          />
          <Icon
            icon={linkedinIcon}
            onClick={() => window.open(links.linkedIn)}
            color="white"
          />
          <Icon
            icon={instagramIcon}
            onClick={() => window.open(links.instagram)}
            color="white"
          />
          <Icon
            icon={bxlGithub}
            onClick={() => window.open(links.github)}
            color="white"
          />
          <Icon
            icon={bxlDiscord}
            onClick={() => window.open(links.discordServer)}
            color="white"
          />
          <Icon
            icon={bxlTwitch}
            onClick={() => window.open(links.twitch)}
            color="white"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
