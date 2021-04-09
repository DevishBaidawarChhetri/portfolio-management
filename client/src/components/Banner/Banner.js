import React from "react";

function Banner({ title, text }) {
  return (
    <div className="banner">
      <div className="banner_content">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Banner;
