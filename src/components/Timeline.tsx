// src/components/Timeline.tsx
import React from "react";
import Chip from '@mui/material/Chip'; 
import almagLogo from "../assets/images/almagLogo.webp";
import visionLogo from "../assets/images/VISION_Visuel-Post-Windoor-2023_V3.jpg";
import '../assets/styles/Timeline.scss';

interface TimelineProps {
  mode: 'light' | 'dark';
}


const labelsFirst = [
  "AutoCAD",
  "DFM",
  "GD&T",
  "Lean Six Sigma",
];


const labelsSecond = [
  "SolidWorks",
  "Excel",
  "ANSYS Workbench",
  "AutoCAD",
];


const labelsThird = [
  "AutoCAD",
  "Design for Manufacturability",
  "GD&T",
  "Lean Six Sigma",
];

const Timeline: React.FC<TimelineProps> = ({ mode }) => {
  return (
    <div id="history">
      <div className="items-container">
        <h1 className="timeline-header">Experience</h1>

        {/* ====== Logo-only Tabs Section ====== */}
        <div className={`vt-container ${mode}`}>  {/* adds light/dark class */}
          <div className="content">
            <input type="radio" name="slider" defaultChecked id="almag" />
            <input type="radio" name="slider" id="vision1" />
            <input type="radio" name="slider" id="vision2" />

            <div className="list">
              <label htmlFor="almag" className="almag">
                <img src={almagLogo} alt="ALMAG" className="tab-logo" />
              </label>
              <label htmlFor="vision1" className="vision1">
                <img src={visionLogo} alt="Vision" className="tab-logo" />
              </label>
              <label htmlFor="vision2" className="vision2">
                <img src={visionLogo} alt="Vision" className="tab-logo" />
              </label>
            </div>

            <div className="text-content">
              <div className="almag text">
                {/* apply CSS class for heading instead of inline style */}
                <h1 className="tab-heading">Manufacturing Engineering Intern</h1>
                <p className="term-text">
                  <span className="term-gradient">ALMAG Aluminum</span> • Brampton, ON
                </p>
                <strong>Date:</strong> May 2025 – Present
                <p> • Supported Cybertruck aluminum tonneau cover production by optimizing layouts for precision and efficiency </p>
                <p> • Improved material flow by revising AutoCAD layouts, reducing support distances by 27%</p>
                <p> • Conducted 12+ time studies to reduce cycle times by 19% through standardized work procedures </p>
                <div className="flex-chips">
                  <span className="chip-title">Skills:</span>
                  {labelsFirst.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
               </div>
              </div>
              <div className="vision1 text">
                <h1 className="tab-heading">Systems Engineering Intern</h1>
                <p className="term-text">
                  <span className="term-gradient">Vision Extrusions Group</span> • Toronto, ON
                </p>
                <strong>Date:</strong> September 2024 – December 2024
                <p> • Built an Excel-based WMS for 5,400+ dies, improving data access speed by 72% </p>
                <p> • Designed and simulated a clamping system in SolidWorks/ANSYS to support 55kg loads</p>
                <p> • Enhanced frame durability by increasing Moment of Inertia by 64% through material strength analysis </p>
                <div className="flex-chips">
                  <span className="chip-title">Skills:</span>
                  {labelsSecond.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
                </div>
              </div>
              <div className="vision2 text">
                <h1 className="tab-heading">Mechanical Engineering Intern</h1>
                <p className="term-text">
                  <span className="term-gradient">Vision Extrusions Group</span> • Toronto, ON
                </p>
                <strong>Date:</strong> January 2024 – April 2024
                <p> • Created 8+ GD&T-compliant 3D window profile designs for 3D printing and testing </p>
                <p> • Prototyped and tested window components for strength, waterproofing, and presentation </p>
                <p> • Boosted waterproofing by 22% through RCA testing under wind and rain simulations </p>
                <div className="flex-chips">
                  <span className="chip-title">Skills:</span>
                  {labelsThird.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;