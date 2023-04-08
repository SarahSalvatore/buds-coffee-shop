import React from "react";

const menuLinks = ["coffee", "tea", "drinks", "food", "pastries", "retail"];

const Menu = () => {
  return (
    <section id="menu">
      <h1 className="section-heading orange-text">Menu</h1>
      <ul className="menu-list">
        {menuLinks.map((menuItem) => {
          return (
            <li className="nav-link" key={menuLinks.indexOf(menuItem)}>
              {menuItem}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
