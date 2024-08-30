import React from "react";
import "./Projects.css";
import Foodimg from "../../assets/Food-app-ss.png";
import Visator from "../../assets/Visator.jpg";
import HotelManagment from "../../assets/Hotel-managment.png";
import { SiDotnet,SiCsharp, SiMicrosoftsqlserver , SiTypescript } from "react-icons/si";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap} from "react-icons/bs";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Foodimg}
                    alt="Rockstar Games"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Food App</h2>
                <p>
                This responsive food ordering webapp lets users browse, filter, and view details for various meal types like Lunch, Breakfast, Dinner, and Snacks. Users can also add their favorite dishes to the cart.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3/>
                  <SiTailwindcss />
                  <VscGithub/>
                  <FaReact />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://rushikakade24.github.io/Food-web-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Visator}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Visator Reallity Website</h2>
                <p>
                The Visator Realty website is a sophisticated platform designed for a real estate agency aiming to connect potential homebuyers with their dream properties.
                </p>
                <div>
                <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <BsBootstrap/>
                </div>
                <div>
                  <a
                    href="https://visatorrealty.com/index.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={HotelManagment}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Shrushti Clinic Website</h2>
                <p>
                The Shrushti Clinic website is a professional healthcare platform designed to facilitate easy and convenient online doctor appointment bookings.
                </p>
                <div>
                <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <BsBootstrap/>
                  <SiDotnet></SiDotnet>
                  <SiCsharp></SiCsharp>
                  <SiMicrosoftsqlserver></SiMicrosoftsqlserver>
                </div>
                <div>
                  <a
                    href="https://visatorrealty.com/index.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
