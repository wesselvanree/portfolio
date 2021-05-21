import React, {useState, useRef} from 'react';
import './Navigation.scss';

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigationMenu = useRef<HTMLUListElement>(null);

  const handleNavToggle = () => {
    setNavOpen(previous => {
      if (!previous) return true;

      navigationMenu.current?.classList.add('is-closing');

      setTimeout(() => {
        navigationMenu.current?.classList.remove('is-closing');
      }, 500);

      return false;
    });
  };

  return (
    <div id="navigation">
      <div className="navigation__inner">
        <div className="navigation__bar">
          <h3 className="navigation__label">Wessel van Ree</h3>
          <div
            className={`hamburger ${navOpen ? 'active' : ''}`}
            onClick={handleNavToggle}
          >
            <div className="hamburger__line hamburger__line--top"></div>
            <div className="hamburger__line hamburger__line--bottom"></div>
          </div>
        </div>
        <ul
          ref={navigationMenu}
          className={`navigation__menu ${navOpen ? 'visible' : ''}`}
        >
          {links.map(({url, text}, index) => (
            <li key={index}>
              <a href={url} onClick={handleNavToggle}>
                {text}
              </a>
              {index < links.length - 1 ? (
                <span className="navigation__menu__line"></span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const links: NavigationLink[] = [
  {
    text: 'Home',
    url: '#',
  },
  {
    text: 'Projects',
    url: '#projects',
  },
  {
    text: 'Other Projects',
    url: '#other-projects',
  },
  {
    text: 'Contact',
    url: '#contact',
  },
];

export default Navigation;
