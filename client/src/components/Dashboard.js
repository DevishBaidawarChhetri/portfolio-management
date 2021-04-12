import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const history = useHistory();
  const [stockProvider, setStockProvider] = useState([]);
  const callDashboard = async () => {
    const res = await fetch("/dashboard");
    // console.log(res);
    if (res.status === 401) {
      history.push("/login");
      toast.error("Please login to visit dashboard.");
    } else {
      const data = await res.json();
      setStockProvider(data.data);
    }
  };

  useEffect(() => {
    callDashboard();
  }, [stockProvider]);

  return (
    <div className="dashboard_section">
      <Banner title="Your Dashboard" />
      <div className="dashboard_content">
        {stockProvider !== undefined
          ? stockProvider.map((sProvider) => (
              <p key={sProvider._id}>{sProvider.stock_provider}</p>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Dashboard;
