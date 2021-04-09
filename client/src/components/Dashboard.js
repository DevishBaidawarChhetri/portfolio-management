import React from "react";
import Banner from "./Banner/Banner";

const Dashboard = () => {
  return (
    <div className="dashboard_section">
      <Banner title="Your Dashboard" />
      <div className="dashboard_content"></div>
    </div>
  );
};

export default Dashboard;
