import React from "react";
import "./css/Skills.css";
import { motion } from "framer-motion";
import { pageAppearFromRight } from "../animations/variants";
import { Icon } from "@iconify/react";
import fileTypeHtml from "@iconify/icons-vscode-icons/file-type-html";
import javascriptIcon from "@iconify/icons-logos/javascript";
import fileTypeCss from "@iconify/icons-vscode-icons/file-type-css";
import javaIcon from "@iconify/icons-logos/java";
import pythonIcon from "@iconify/icons-logos/python";
import consoleSqlOutlined from "@iconify/icons-ant-design/console-sql-outlined";
import cSharp from "@iconify/icons-logos/c-sharp";

function Skills() {
  return (
    <motion.div
      key="skills"
      variants={pageAppearFromRight}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="skills"
    >
      {/* ROW FOR THE LANGUAGES I KNOW:
       - 2 COLUMNS :
              - ADVANCED LANGUAGES: HTML; CSS; JAVASCRIPT; JAVA;
              -INTERMEDIATE LAGUNAGES PYTHON; SQL ; C ; ... */}

      {/** ROW FOR THE GENERAL SKILLS IN CODINFG AND SOFTWARE */}
    </motion.div>
  );
}

export default Skills;
