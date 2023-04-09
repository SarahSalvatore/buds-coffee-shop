import React from "react";

function formatPrice(price) {
  return typeof price === "object"
    ? Object.keys(price)
        .map((size) => `${size} ${price[size].toFixed(2)}`)
        .join(" / ")
    : price.toFixed(2);
}

const MenuItem = ({ name, price, description }) => {
  return (
    <div className="menu-item-container">
      <div className="menu-title-price-container">
        <h2 className="menu-item-title white-text">{name}</h2>
        <p className="menu-item-price white-text">{formatPrice(price)}</p>
      </div>
      <hr className="menu-hr" />
    </div>
  );
};

export default MenuItem;
