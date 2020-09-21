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
import BuildIcon from "@material-ui/icons/Build";
import GroupIcon from "@material-ui/icons/Group";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import StorageIcon from "@material-ui/icons/Storage";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FindReplaceIcon from "@material-ui/icons/FindReplace";

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
      <div className="skills__languages">
        <div className="skills__languagesItem">
          <div className="skills__languagesIcons">
            <Icon icon={fileTypeHtml} />
            <Icon icon={fileTypeCss} />
            <Icon icon={javascriptIcon} color="white" />
            <Icon icon={javaIcon} />
          </div>
          <h3>Advanced</h3>
          <span className="open"> {"{"} </span>
          <span className="close"> {"}"} </span>
        </div>
        <h2>Languages</h2>
        <div className="skills__languagesItem">
          <div className="skills__languagesIcons">
            <Icon icon={cSharp} />
            <Icon icon={pythonIcon} />
            <Icon icon={consoleSqlOutlined} color="white" />
          </div>
          <h3>Intermediate</h3>
          <span className="open"> {"{"} </span>
          <span className="close"> {"}"} </span>
        </div>
      </div>
      <div className="skills__competent">
        <h1>Software World Competent Skills</h1>
        <div className="skills__competent__content">
          <div className="skills__competent__content__col">
            <div className="skills__competentItem">
              <h3>Solving Problems</h3>
              <div>
                <BuildIcon fontSize="large" />
                <p>
                  Think what's to solve, how to solve it, and find the best way.
                  Divide problems into smaller ones.
                </p>
              </div>
            </div>
            <div className="skills__competentItem">
              <h3>TeamWork</h3>
              <div>
                <GroupIcon fontSize="large" />
                <p>
                  Discuss with the team to find the best method of co-working.
                  Lead them into succes and be leaded to form a good team.
                </p>
              </div>
            </div>
          </div>
          <div className="skills__competent__content__col">
            <div className="skills__competentItem">
              <h3>API Management</h3>
              <div>
                <StorageIcon />
                <p>
                  Build the Backend, integrating a database, and treat the
                  diferent endpoint that will feed the Frontend
                </p>
              </div>
            </div>
            <div className="skills__competentItem ">
              <h3>Requieremts Research</h3>
              <div>
                <FindInPageIcon fontSize="large" />
                <p>
                  Find requierements, the cost and time that will be spent do be
                  done, doing a user-centered research.
                </p>
              </div>
            </div>
          </div>
          <div className="skills__competent__content__col">
            <div className="skills__competentItem">
              <h3>Data Analysis</h3>
              <div>
                <TrendingUpIcon />
                <p>
                  Use data analysis in code to find the more optimal code that
                  will consume less memory and resources.
                </p>
              </div>
            </div>
            <div className="skills__competentItem">
              <h3>Don't do what's already coded</h3>
              <div>
                <FindReplaceIcon />
                <p>
                  Good eye for finding the best resources to code less and make
                  profit of what someone has already coded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
