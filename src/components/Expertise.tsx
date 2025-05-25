import React from "react";
import waterlooDark from '../assets/images/UniversityOfWaterloo_logo_horiz_rgb.png';
import waterlooLight from '../assets/images/waterloo.png'; // <-- create this

import cyberDark from '../assets/images/1200px-Cybertrucklogo.svg.png';
import cyberLight from '../assets/images/cyberLogo.png.webp'; // <-- create this

import cadLogo from '../assets/images/autoLogo.svg.png';
import swLogo from '../assets/images/SolidWorks-Logo.png';
import matLogo from '../assets/images/MatlabLogo.png';
import plusLogo from '../assets/images/IC++Logo.svg.png';
import ansysLight from '../assets/images/ANSLogo.png';
import ansysDark from '../assets/images/ANSYSLogo.png';
import fusionLogo from '../assets/images/fusionLogo.png';
import visualLogo from '../assets/images/Visual-Studio-Logo-2019.png';

import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Dynamics II",
  "Materials II",
  "Circuits II",
  "Thermodynamics I",
  "Mechanics of Deformable Solids II",
];

// 🟡 Add mode as a prop
function Expertise({ mode }: { mode: string }) {
  // 🟣 Pick the right logos
  const waterlooLogo = mode === "dark" ? waterlooLight : waterlooDark;
  const cyberLogo = mode === "dark" ? cyberLight : cyberDark;
  const ansysLogo = mode === "dark" ? ansysLight : ansysDark;

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <div className="skills-grid">
          <div className="skill">
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "linear-gradient(270deg, #fddb4d, #f3ae2c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Education
            </h1>
            <img
            src={waterlooLogo}
            alt="Waterloo Logo"
            style={{
                width: mode === "dark" ? "250px" : "250px",  // Customize here
                height: mode === "dark" ? "65px" : "65px",
                borderRadius: "2px"
            }}
            />
            <h3>Mechanical Engineering</h3>
            <p className="term-text">Term: <span className="term-gradient">2A</span></p>
            <div className="flex-chips">
              <span className="chip-title">Relevant Courses:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill current">
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Current Role
            </h1>
            <img
            src={cyberLogo}
            alt="Cyber Logo"
            style={{
                width: mode === "dark" ? "300px" : "300px",
                height: mode === "dark" ? "80px" : "80px",
                borderRadius: "2px",
                marginBottom: "15px"
            }}
            />
            <p className="cyber-text">
              Working on the <span className="cyber-gradient">Tesla CyberTruck</span> at ALMAG
            </p>
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #5B1BA0, #B993E2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Technical Skills
            </h1>
            <div className="logo-slider">
              <div className="logo-track">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <img src={cadLogo} alt="CAD" />
                    <img src={visualLogo} alt="Visual" />
                    <img src={swLogo} alt="SolidWorks" className="logo-ansys" />
                    <img src={matLogo} alt="MATLAB" />
                    <img src={plusLogo} alt="C++" />
                    <img src={ansysLogo} alt="Ansys" className="logo-ansys" />                    
                    <img src={fusionLogo} alt="Fusion" />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Expertise;