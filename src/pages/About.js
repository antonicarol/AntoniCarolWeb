import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./css/About.css";
import { Avatar } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HouseIcon from "@material-ui/icons/House";
import PhoneIcon from "@material-ui/icons/Phone";
import Embed from "react-embed";
import { useHistory, useLocation } from "react-router-dom";
import { pageAppearFromRight } from "../animations/variants";
import ContactItem from "../components/ContactItem";
import { actionTypes } from "../contexts/reducer";
import { useStateValue } from "../contexts/StateProvider";

function About() {
  const [{ path }, dispatch] = useStateValue();
  const location = useLocation();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_LOCATION,
      location: location.pathname,
    });
  }, []);
  return (
    <motion.div
      className="about"
      variants={pageAppearFromRight}
      initial="hidden"
      animate="visible"
      exit="exit"
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
          <ContactItem title="tonicarolmateo@gmail.com" Icon={MailIcon} />
          <ContactItem title="Spain - Barcelona" Icon={LocationCityIcon} />
          <ContactItem
            title="Igualada-O8700 --- C/El Bruc, 51"
            Icon={HouseIcon}
          />
          <ContactItem title="620 35 56 72 " Icon={PhoneIcon} />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
