import React from "react";
import { Link } from "react-router-dom";
const DashboardNav = () => {
  return (
    <div className="dashboard_nav_link">
      <Link to={`/stocks`} className="button">
        View Transactions
      </Link>
      <Link to={`/buysale`} className="button">
        Buy/Sell Stock
      </Link>
      <Link to={`/individualStocks`} className="button">
        Individual Stock
      </Link>
    </div>
  );
};

export default DashboardNav;
