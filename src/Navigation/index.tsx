import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  function toggleMenu() {
    const navigationMenu = document.querySelector(
      ".navigation__menu"
    ) as HTMLElement;

    const hamburger = document.querySelector(".hamburger") as HTMLElement;

    if (navigationMenu.classList.contains("visible")) {
      navigationMenu.classList.add("is-closing");
      navigationMenu.classList.remove("visible");
      hamburger.classList.remove("active");
      setTimeout(() => {
        navigationMenu.classList.remove("is-closing");
      }, 500);
    } else {
      navigationMenu.classList.add("visible");
      hamburger.classList.add("active");
    }
  }

  return (
    <div id="navigation">
      <div className="navigation__bar">
        <p className="navigation__label">Wessel van Ree</p>
        <div
          className="hamburger"
          onClick={(event) => {
            toggleMenu();
          }}
        >
          <div className="hamburger__line hamburger__line--top"></div>
          <div className="hamburger__line hamburger__line--bottom"></div>
        </div>
      </div>
      <ul className={"navigation__menu "}>
        <li>
          <Link
            to="/"
            onClick={(event) => {
              toggleMenu();
            }}
          >
            Home
          </Link>
          <span className="navigation__menu__line"></span>
        </li>
        <li>
          <Link
            to="/about"
            onClick={(event) => {
              toggleMenu();
            }}
          >
            About
          </Link>
          <span className="navigation__menu__line"></span>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={(event) => {
              toggleMenu();
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
