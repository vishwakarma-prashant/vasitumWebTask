import React from "react";
import "./Sidebar.css";
import vasitumLogo from "../../assets/images/vasitumLogo.svg";
import ic_dashboard from "../../assets/images/ic_dashboard.svg";
import ic_recruitment from "../../assets/images/ic_recruitment.svg";
import ic_calendar from "../../assets/images/ic_calendar.svg";
import ic_employee from "../../assets/images/ic_employee.svg";
import ic_department from "../../assets/images/ic_department.svg";

import ic_settings from "../../assets/images/ic_settings.svg";
import ic_support from "../../assets/images/ic_support.svg";
import mainLogo1 from "../../assets/images/mainLogo1.svg";

function Sidebar() {
  return (
    <div className="sidebar-main-div">
      <div className="sidebar-top">
        <img src={vasitumLogo} alt="mainLogo" className="mainLogo" />
        <img src={mainLogo1} alt="mainLogo" id="mainLogo1" />
      
      </div>
      <div className="sidebar-main-menu">
        <p>Main Menu</p>
        <div className="menu-item">
          <img alt="dashboard" src={ic_dashboard} />
          <h3 style={{ color: "#FF5151" }}>Dashboard</h3>
        </div>
        <div className="menu-item">
          <img alt="recruitment" src={ic_recruitment} />
          <h3>Recruitment</h3>
        </div>
        <div className="menu-item">
          <img alt="schedule" src={ic_calendar} />
          <h3>Schedule</h3>
        </div>
        <div className="menu-item">
          <img alt="Employee" src={ic_employee} />
          <h3>Employee</h3>
        </div>
        <div className="menu-item">
          <img alt="Department" src={ic_department} />
          <h3>Department</h3>
        </div>
      </div>
      <div className="sidebar-main-menu" style={{ paddingTop: "10px" }}>
        <p>Other</p>
        <div className="menu-item">
          <img alt="dashboard" src={ic_support} />
          <h3>Support</h3>
        </div>
        <div className="menu-item">
          <img alt="recruitment" src={ic_settings} />
          <h3>Settings</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
