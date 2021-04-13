import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import AddStock from "./AddStock";

const Dashboard = () => {
  const history = useHistory();
  const [fetchingData, setFetchingData] = useState(true);
  const [stockProvider, setStockProvider] = useState([]);
  const callDashboard = async () => {
    try {
      const res = await fetch("/dashboard", {
        method: "GET",
        credentials: "include",
      });
      if (fetchingData) {
        if (res.status === 401) {
          history.push("/login");
          toast.error("Please login to visit dashboard.");
        } else {
          const data = await res.json();
          localStorage.setItem("userId", data.userId);
          setStockProvider(data.data);
          setFetchingData(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    callDashboard();
  }, [stockProvider]);

  return (
    <div className="dashboard_section">
      <Banner title="Your Dashboard" />
      <AddStock stockProvider={stockProvider} />
    </div>
  );
};

export default Dashboard;
