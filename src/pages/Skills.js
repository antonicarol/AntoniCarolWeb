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
                <BuildIcon />
                <p>
                  Think what's to solve, how to solve it, and find the best way.
                  Divide problems into smaller ones.
                </p>
              </div>
            </div>
            <div className="skills__competentItem">
              <h3>TeamWork</h3>
              <div>
                <GroupIcon />
                <p>
                  Discuss with the team to find the best method of co-working.
                  Lead them into succes and be leaded to form a good team.
                </p>
              </div>
            </div>
          </div>
          <div className="skills__competent__content__col">
            <div className="skills__competentItem">
              <h3>Solving Problems</h3>
              <div>
                <BuildIcon />
                <p>
                  Think what's to solve, how to solve it, and find the best way.
                  Divide problems into smaller ones.
                </p>
              </div>
            </div>
            <div className="skills__competentItem">
              <h3>TeamWork</h3>
              <div>
                <GroupIcon />
                <p>
                  Discuss with the team to find the best method of co-working.
                  Lead them into succes and be leaded to form a good team.
                </p>
              </div>
            </div>
          </div>
          <div className="skills__competent__content__col">
            <div className="skills__competentItem">
              <h3>Solving Problems</h3>
              <div>
                <BuildIcon />
                <p>
                  Think what's to solve, how to solve it, and find the best way.
                  Divide problems into smaller ones.
                </p>
              </div>
            </div>
            <div className="skills__competentItem">
              <h3>TeamWork</h3>
              <div>
                <GroupIcon />
                <p>
                  Discuss with the team to find the best method of co-working.
                  Lead them into succes and be leaded to form a good team.
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
