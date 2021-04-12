import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [stockProvider, setStockProvider] = useState([]);
  const callDashboard = async () => {
    const res = await fetch("/names");
    const data = await res.json();
    console.log(data.data);
    setStockProvider(data.data);
  };

  useEffect(() => {
    callDashboard();
  }, []);

  return (
    <div className="dashboard_section">
      <Banner title="Your Dashboard" />
      <div className="dashboard_content">
        {stockProvider.map((sProvider) => (
          <p key={sProvider._id}>{sProvider.stock_provider}</p>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
