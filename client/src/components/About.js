import React from "react";
import Banner from "./Banner/Banner";
import AboutImg from "../assets/about.svg";

const About = () => {
  return (
    <div className="about_section">
      <Banner title="About Portfolio Management" />
      <div className="about_content">
        <div className="about_image">
          <img src={AboutImg} alt="About Imgg" />
        </div>
        <div className="about_description">
          <p>
            Inventory is a major asset that represents tied-up capital; managing
            stock effectively therefore enables a business to free up capital.
            Efficient stock control requires understanding the mix of different
            kinds of stock and acknowledging the demands on that stock. This
            help keep stock at a reasonable level, balancing the need for
            surplus supplies with the need to reduce tied-up capital. Different
            types of stock There are four main categories of stock or inventory:
            Raw materials and components: stock that is ready to be used in the
            production of goods. <br />
            <br /> Work in progress: unfinished goods that are still in
            production. Finished goods: items that are ready for sale.
            Consumables: stock that will be used in the daily running of the
            business and will need updating, for example, fuel and stationery.
            You may choose to divide your stock into further categories. For
            example, if you categorise stock according to value, you could have
            categories for low, medium, and high value stock. This could help
            you plan for and fund the replacement of stock if cashflow is
            limited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
