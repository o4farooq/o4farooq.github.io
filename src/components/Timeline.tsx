import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import almagLogo from "../assets/images/almagLogo.webp";
import visionLogo from "../assets/images/VISION_Visuel-Post-Windoor-2023_V3.jpg";
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
      <h1
                    style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    /* gradient text: */
                    background: "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                    }}
                    >
                    Experience
                </h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - present"
            icon={<img src={almagLogo} alt="Almag" className="timeline-logo" />}
            iconStyle={{
            // white circle behind your logo
              padding: "0px",           // gives your logo breathing room
            }}
          >
            <h3   className="vertical-timeline-element-title"
                  style={{
                    background: "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  >
                  Manufacturing Engineering Intern</h3>

            <div className="timeline-subtitle">
              <span className="company-name">ALMAG Alumnium</span>
              <span className="location">Brampton, ON</span>
            </div>
            <p>
              Supported Cybertruck production, did time studies and AutoCAD
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2024 - Dec 2024"
            icon={<img src={visionLogo} alt="Vision" className="timeline-logo" />}
            iconStyle={{
            // white circle behind your logo
              padding: "0px",           // gives your logo breathing room
            }}
          >
            <h3    className="vertical-timeline-element-title"
                  style={{
                    background: "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  >
                  Systems Engineering Intern</h3>
            <div className="timeline-subtitle">
              <span className="company-name">Vision Extrusions</span>
              <span className="location">Toronto, ON</span>
            </div>            <p>
              Integrated a database, designed, tested and optimized prototypes
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - Apr 2023"
            icon={<img src={visionLogo} alt="Vision" className="timeline-logo" />}
            iconStyle={{
            // white circle behind your logo
              padding: "0px",           // gives your logo breathing room
            }}
          >
            <h3    className="vertical-timeline-element-title"
                  style={{
                    background: "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  >
                  Mechanical Engineering Intern</h3>
            
            <div className="timeline-subtitle">
              <span className="company-name">Vision Extrusions</span>
              <span className="location">Toronto, ON</span>
            </div>
            <p>
              Created/tested 3D CAD designs, optimized water resistance from RCA 
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;