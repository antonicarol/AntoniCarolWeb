import React from "react";
import { motion } from "framer-motion";
import "./css/About.css";
import { Avatar } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HouseIcon from "@material-ui/icons/House";
import PhoneIcon from "@material-ui/icons/Phone";
import Embed from "react-embed";
import { useHistory } from "react-router-dom";

const variantVariants = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 50,
    transition: {
      type: "tween",
      delay: 0.6,
      duration: 0.6,
    },
  },
};
function About() {
  const history = useHistory();
  console.log(history);
  return (
    <motion.div
      className="about"
      variants={variantVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="about__left">
        <Avatar className="about__avatar" />
      </div>
      <div className="about__center">
        <div className="about__title">
          <h1>About Me</h1>
        </div>
        <p>
          Hey! I'm Antoni and I'm 20 years old. I love computers, the geenies
          that can transform your ideas into something if you know how to
          communicate with them. Been self teaching myself for 4 months using
          the biggest college in the World, the Internet. With that, I've
          realised that I love Backend!
        </p>
        <div className="about__contact">
          <div className="about__contact__item">
            <MailIcon />
            <p>tonicarolmateo@gmail.com</p>
          </div>
          <div className="about__contact__item">
            <LocationCityIcon />
            <p>Spain - Barcelona</p>
          </div>
          <div className="about__contact__item">
            <HouseIcon />
            <p>Igualada-O8700 --- C/El Bruc, 51 </p>
          </div>
          <div className="about__contact__item">
            <PhoneIcon />
            <p>620 35 56 72 </p>
          </div>
        </div>
      </div>
      <div className="about__right">
        <Embed
          isDark
          url="https://twitter.com/Antonicarol1/status/1300177861572284417"
        />
      </div>
    </motion.div>
  );
}

export default About;
