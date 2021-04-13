import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
const DashboardNav = () => {
  const history = useHistory();
  const userLogout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log(res);
      if (res.status === 200) {
        localStorage.removeItem("userId");
        history.push("/");
        toast.success("Logged out successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="dashboard_nav_link">
      <Link to={`/stocks`} className="button">
        View Transactions
      </Link>
      <Link to={`/buysale`} className="button">
        Buy/Sale Stock
      </Link>

      <span className="button" onClick={userLogout}>
        Logout
      </span>
    </div>
  );
};

export default DashboardNav;
