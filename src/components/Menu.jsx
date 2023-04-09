import React, { useState } from "react";
import MenuSection from "./MenuSection";
import coffeeItems from "../data/menuData/coffeeItems";
import teaItems from "../data/menuData/teaItems";
import drinkItems from "../data/menuData/drinkItems";
import foodItems from "../data/menuData/foodItems";
import pastryItems from "../data/menuData/pastryItems";
import retailItems from "../data/menuData/retailItems";

const menuLinks = ["coffee", "tea", "drinks", "food", "pastries", "retail"];

const menuSections = {
  coffee: coffeeItems,
  tea: teaItems,
  drinks: drinkItems,
  food: foodItems,
  pastries: pastryItems,
  retail: retailItems,
};

const Menu = () => {
  const [activeMenuSection, setActiveMenuSection] = useState("coffee");

  return (
    <section id="menu">
      <h2 className="section-heading orange-text">Menu</h2>
      <ul className="menu-list">
        {menuLinks.map((menuItem) => {
          return (
            <li
              className={`nav-link ${
                activeMenuSection === menuItem ? "orange-text" : "white-text"
              }`}
              key={menuLinks.indexOf(menuItem)}
              onClick={() => setActiveMenuSection(menuItem)}
            >
              {menuItem}
            </li>
          );
        })}
      </ul>
      <div className="menu-section">
        <MenuSection displayedItems={menuSections[activeMenuSection]} />
      </div>
    </section>
  );
};

export default Menu;
