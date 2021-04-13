import React, { useState } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiBankFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddStock = ({ stockProvider }) => {
  const history = useHistory();
  const userIid = localStorage.getItem("userId");
  const [transaction, setTransaction] = useState({
    userId: userIid,
    stock_provider: "",
    transaction_type: "buy",
    quantity: "",
    price: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTransaction({ ...transaction, [name]: value });
  };

  const BuySellStock = async (e) => {
    e.preventDefault();
    const {
      userId,
      stock_provider,
      transaction_type,
      quantity,
      price,
    } = transaction;
    // console.log(stock_provider, transaction_type, quantity, price);
    const res = await fetch("/stock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stock_name: stock_provider,
        transaction_type,
        quantity,
        amount: price,
        userId,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      setTransaction({
        stock_provider: "",
        transaction_type: "buy",
        quantity: "",
        price: "",
      });
      history.push("/stocks");
    }
  };

  return (
    <div className="dashboard_content">
      <div className="form_content buy_sale_content">
        <h2 className="form_title">Buy/Sell Stock</h2>
        <form className="register_form" id="register_form" method="POST">
          <div className="form_group">
            <RiBankFill size="20" />
            <select
              name="stock_provider"
              value={transaction.stock_provider}
              onChange={handleInputs}
            >
              {stockProvider !== undefined
                ? stockProvider.map((sProvider) => (
                    <option
                      key={sProvider._id}
                      value={sProvider.stock_provider}
                    >
                      {sProvider.stock_provider}
                    </option>
                  ))
                : ""}
            </select>
          </div>

          <div className="form_group">
            <AiOutlineTransaction size="20" />
            <input
              type="radio"
              name="transaction_type"
              id="buy"
              value="buy"
              onChange={handleInputs}
            />
            <label htmlFor="buy">Buy</label>
            <input
              type="radio"
              name="transaction_type"
              id="sell"
              value="sell"
              onChange={handleInputs}
            />
            <label htmlFor="sell">Sell</label>
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
              value={transaction.quantity}
              onChange={handleInputs}
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
              placeholder={
                transaction.transaction_type === "buy"
                  ? "Buying Price"
                  : "Selling Price"
              }
              value={transaction.price}
              onChange={handleInputs}
            />
          </div>

          <div className="form_group">
            <input
              className="button"
              type="submit"
              name="register"
              id="register"
              value={transaction.transaction_type === "buy" ? "Buy" : "Sell"}
              onClick={BuySellStock}
            />
          </div>
          <span style={{ color: "red" }}>
            *Note: Transactions date are auto generated.
          </span>
        </form>
      </div>
    </div>
  );
};

export default AddStock;
