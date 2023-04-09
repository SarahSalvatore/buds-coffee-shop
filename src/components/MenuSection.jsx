import React from "react";
import MenuItem from "./MenuItem";

const MenuSection = ({ displayedItems }) => {
  return (
    <div className="menu-section-container">
      {displayedItems.map((item) => (
        <MenuItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default MenuSection;
