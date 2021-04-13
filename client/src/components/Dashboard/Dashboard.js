import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import DashboardNav from "./DashboardNav";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";
import ThreeCircles from "../HomeDesign/ThreeCircles";

const Dashboard = () => {
  const history = useHistory();
  const [fetchingData, setFetchingData] = useState(true);
  const [stocks, setStocks] = useState([]);
  const [typeBuy, setTypeBuy] = useState([]);
  const [typeSell, setTypeSell] = useState([]);
  const [total, setTotal] = useState({
    totalQuantityBought: "",
    totalAmountInvested: "",
    totalQuantitySold: "",
    totalSoldAmount: "",
  });
  const userId = localStorage.getItem("userId");
  const stocksFetch = async () => {
    try {
      const res = await fetch(`/stocks/${userId}`, {
        method: "GET",
        credentials: "include",
      });
      if (fetchingData) {
        if (res.status === 401) {
          history.push("/login");
          toast.error("Please login to visit stocklist.");
        } else {
          const data = await res.json();
          // console.log(data.data);
          setStocks(data.data);

          // Transaction Type "BUY"
          let type_buy = [...data.data];
          type_buy = type_buy.filter(
            (stock) => stock.transaction_type === "buy"
          );
          // console.log(type_buy);
          setTypeBuy(type_buy);

          // // Transaction Type "SELL"
          let type_sell = [...data.data];
          type_sell = type_sell.filter(
            (stock) => stock.transaction_type === "sell"
          );
          setTypeSell(type_sell);
          setFetchingData(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    stocksFetch();
  }, []);

  // Total Quantity Bought
  total.totalQuantityBought = typeBuy.reduce((total, curr) => {
    return total + curr.quantity;
  }, 0);

  // Total Amount Invested
  total.totalAmountInvested = typeBuy.reduce((total, curr) => {
    return total + curr.amount;
  }, 0);

  // Total Quantity Sold
  total.totalQuantitySold = typeSell.reduce((total, curr) => {
    return total + curr.quantity;
  }, 0);

  // Total Sold Amount
  total.totalSoldAmount = typeSell.reduce((total, curr) => {
    return total + curr.amount;
  }, 0);

  return (
    <div className="main_dashboard_nav">
      <DashboardNav />
      <div className="buy_sale_data">
        <h1>Overall Profit/Loss</h1>
        <div className="data_holder">
          <div className="top">
            <div className="top_left_box">
              <div className="dashboard_icon">
                <GiPayMoney size="50" />
              </div>
              <div className="dashboard_data">
                <h2>{total.totalQuantityBought}</h2>
                Total Quantity Bought
              </div>
            </div>

            <div className="top_right_box">
              <div className="dashboard_icon">
                <FaCashRegister size="40" />
              </div>
              <div className="dashboard_data">
                <h2>{total.totalQuantitySold}</h2>
                Total Quantity Sold
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="bottom_left_box">
              <div className="dashboard_icon">
                <MdAttachMoney size="50" />
              </div>
              <div className="dashboard_data">
                <h2>{total.totalAmountInvested}</h2>
                Total Amount Invested
              </div>
            </div>
            <div className="bottom_right_box">
              <div className="dashboard_icon">
                <GiReceiveMoney size="50" />
              </div>
              <div className="dashboard_data">
                <h2>{total.totalSoldAmount}</h2>
                Total Sold Amount
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profit_loss_data">
        <h2>
          {total.totalSoldAmount - total.totalAmountInvested > 0
            ? `Overall Profit: Rs. ${
                total.totalSoldAmount - total.totalAmountInvested
              } `
            : `Overall Loss: Rs. ${
                total.totalAmountInvested - total.totalSoldAmount
              } `}
        </h2>
      </div>

      <ThreeCircles />
    </div>
  );
};

export default Dashboard;
