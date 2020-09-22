import React from "react";
import { motion } from "framer-motion";
import "./css/About.css";
import { Avatar } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HouseIcon from "@material-ui/icons/House";
import PhoneIcon from "@material-ui/icons/Phone";
import { pageAppearFromRight } from "../animations/variants";
import ContactItem from "../components/ContactItem";
import { Helmet } from "react-helmet";
import me from "../images/me.jpg";
import me2 from "../images/jo.jpg";
import scooter from "../images/scooter.png";

function About() {
  return (
    <>
      <Helmet>
        <title>Antoni Carol - About me</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <motion.div
        className="about"
        variants={pageAppearFromRight}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="about__left">
          <Avatar src={me} className="about__avatar" />
          <div className="about__left__info">
            <h2>{"<Antoni Carol/>"}</h2>
            <span>FullStack Developer</span>
          </div>
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
            <ContactItem title="tonicarolmateo@gmail.com" Icon={MailIcon} />
            <ContactItem title="Spain - Barcelona" Icon={LocationCityIcon} />
            <ContactItem
              title="Igualada-O8700 --- C/El Bruc, 51"
              Icon={HouseIcon}
            />
            <ContactItem title="620 35 56 72 " Icon={PhoneIcon} />
          </div>
        </div>
        <div className="about__right">
          <img alt="" src={me2} />
          <img alt="" src={scooter} />
          <img alt="" src="" />
        </div>
      </motion.div>
    </>
  );
}

export default About;
