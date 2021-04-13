import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { BiDollarCircle } from "react-icons/bi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiBankFill } from "react-icons/ri";

const Dashboard = () => {
  const history = useHistory();
  const [stockProvider, setStockProvider] = useState([]);
  const callDashboard = async () => {
    const res = await fetch("/dashboard", { method: "GET" });
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
        <div className="form_content buy_sale_content">
          <h2 className="form_title">Buy/Sale Stock</h2>
          <form className="register_form" id="register_form" method="POST">
            <div className="form_group">
              <RiBankFill size="20" />
              <select name="stock_providers" id="asdf">
                {stockProvider !== undefined
                  ? stockProvider.map((sProvider) => (
                      <option key={sProvider._id}>
                        {sProvider.stock_provider}
                      </option>
                    ))
                  : ""}
              </select>
            </div>

            <div className="form_group">
              <AiOutlineTransaction size="20" />
              <input type="radio" name="transaction" id="buy" value="buy" />
              <label htmlFor="buy">Buy</label>
              <input type="radio" name="transaction" id="sale" value="sale" />
              <label htmlFor="sale">Sale</label>
            </div>

            <div className="form_group">
              <label htmlFor="phone">
                <HiOutlinePlusCircle size="20" />
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                autoComplete="off"
                placeholder="Quantity"
              />
            </div>

            <div className="form_group">
              <label htmlFor="price">
                <BiDollarCircle size="20" />
              </label>
              <input
                type="number"
                name="price"
                id="price"
                autoComplete="off"
                placeholder="Buying/Selling price"
              />
            </div>

            <div className="form_group">
              <input
                className="button"
                type="submit"
                name="register"
                id="register"
              />
            </div>
            <span style={{ color: "red" }}>
              *Note: Transactions date are auto generated.
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
