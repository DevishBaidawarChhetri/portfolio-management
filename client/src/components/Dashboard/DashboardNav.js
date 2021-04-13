import React from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div className="dashboard_nav_link">
      <Link to={`/stocks`} className="button">
        View Transactions
      </Link>
    </div>
  );
};

export default DashboardNav;
