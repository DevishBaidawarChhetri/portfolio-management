import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ThreeCircles from "../HomeDesign/ThreeCircles";

const StockList = () => {
  const history = useHistory();
  const [fetchingData, setFetchingData] = useState(true);
  const [stocks, setStocks] = useState([]);
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
  return (
    <div className="home_section stock_list">
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Stock Name</th>
            <th>Transaction Type</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {stocks !== undefined
            ? stocks.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.stock_name}</td>
                    <td>{item.transaction_type}</td>
                    <td>{item.quantity}</td>
                    <td>{item.amount}</td>
                    <td>{item.date.split(/[T ]/i, 1)[0]}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
      <Link to="/dashboard" style={{ marginTop: "1rem" }} className="button">
        Back to Dashboard
      </Link>
      <ThreeCircles />
    </div>
  );
};

export default StockList;
