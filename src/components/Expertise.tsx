import React from "react";
import waterlooLogo from '../assets/images/waterloo.png';
import cyberLogo from '../assets/images/cyberLogo.png.webp';
import cadLogo from '../assets/images/autoLogo.svg.png';
import swLogo from '../assets/images/SolidWorks-Logo.png';
import matLogo from '../assets/images/MatlabLogo.png';
import plusLogo from '../assets/images/IC++Logo.svg.png';
import ansLogo from '../assets/images/ANSLogo.png';
import fusionLogo from '../assets/images/fusionLogo.png';

import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Mechanics I",
    "Materials II",
    "Electrical Circuits II",
    "Calculus III",
    "Intro to C++",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <div className="skills-grid">
                <div className="skill">
                <h1
                    style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    /* gradient text: */
                    background: "linear-gradient(90deg, #fddb4d, #f3ae2c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                    }}
                    >
                    Education
                </h1>
                <img
                src={waterlooLogo}
                alt="Waterloo Logo"
                style={{ width: "250px", height: "65px", borderRadius: "2px" }}
                />
                    <h3>Mechanical Engineering</h3>
                    <p className="term-text">
                        Term: <span className="term-gradient">2A</span>
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Relevant Courses:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill current">
                    <h1
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            /* gradient text: */
                            background: "linear-gradient(90deg, #50caff, #0070f3)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                        >
                        Current Role
                    </h1>
                    <img
                        src={cyberLogo}
                        alt="Cyber Logo"
                        style={{ width: "300px", height: "80px", borderRadius: "2px", marginBottom: "15px" }}
                    />
                    <p className="cyber-text">
                        Working on the <span className="cyber-gradient">Tesla CyberTruck</span> at ALMAG
                    </p>
                    <h1
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            /* gradient text: */
                            background: "linear-gradient(90deg, #a29bfe, #6c5ce7)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                        >
                        Technical Skills
                    </h1>
                    <div className="logo-slider">
                    <div className="logo-track">
                        {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <img src={cadLogo} alt="CAD" />
                            <img src={swLogo} alt="SolidWorks" className="logo-ansys" />
                            <img src={matLogo} alt="MATLAB" />
                            <img src={plusLogo} alt="C++" />
                            <img src={ansLogo} alt="Ansys" className="logo-ansys" />
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