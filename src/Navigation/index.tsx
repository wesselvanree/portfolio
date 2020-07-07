import React from "react";

class Navigation extends React.Component {
  toggleMenu() {
    const navigationMenu = document.querySelector(
      ".navigation__menu"
    ) as HTMLElement;

    const hamburger = document.querySelector(".hamburger") as HTMLElement;

    if (window.innerWidth < 600) {
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
  }

  render() {
    return (
      <div id="navigation">
        <div className="navigation__inner">
          <div className="navigation__bar">
            <p className="navigation__label">Wessel van Ree</p>
            <div
              className="hamburger"
              onClick={(event) => {
                this.toggleMenu();
              }}
            >
              <div className="hamburger__line hamburger__line--top"></div>
              <div className="hamburger__line hamburger__line--bottom"></div>
            </div>
          </div>
          <ul className={"navigation__menu "}>
            <li>
              <a
                href="#"
                onClick={(event) => {
                  this.toggleMenu();
                }}
              >
                Home
              </a>
              <span className="navigation__menu__line"></span>
            </li>
            <li>
              <a
                href="#"
                onClick={(event) => {
                  this.toggleMenu();
                }}
              >
                About
              </a>
              <span className="navigation__menu__line"></span>
            </li>
            <li>
              <a
                href="#"
                onClick={(event) => {
                  this.toggleMenu();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
