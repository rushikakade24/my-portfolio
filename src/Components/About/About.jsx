import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Rushikesh Kakade</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        Passionate and creative Frontend Developer with proficiency in JavaScript, HTML, CSS, React, Bootstrap, Tailwind CSS ,UI/UX and related libraries. Equipped with a variety of tools and technologies, including the Typescript, Asp.net, C#, SQL, and always eager to learn new ones. Successfully Created 5+ projects.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/rushikakade24"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:rushikakade24@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919890582923"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/rushi-kakade-251242254"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>

        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1htQtYe1b7OTiCmECBhQtDZTsNilQCXhc/view?usp=drivesdk"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
