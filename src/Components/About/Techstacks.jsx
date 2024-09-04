import React from "react";
import "./Techstacks.css";
import { FaReact,  FaAws } from "react-icons/fa";
import { SiDotnet,SiCsharp, SiMicrosoftsqlserver , SiTypescript } from "react-icons/si";
import { SiFigma } from "react-icons/si";

<SiDotnet />

import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
          <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
          <SiDotnet />
            <h5>Asp.net</h5>
          </div>
          <div>
          <SiCsharp />
            <h5>C#</h5>
          </div>
          <div>
          <SiMicrosoftsqlserver />
            <h5>SQL</h5>
          </div>
          <div>
          <SiTailwindcss />
            <h5>Tailwindcss</h5>
          </div>

          <div>
          <SiFigma /> 
            <h5>UI/UX</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
