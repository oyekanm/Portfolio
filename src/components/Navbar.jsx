import React, { useState } from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="Nav container">
      <NavLink to="/" className="Nav__name">
        O|B
      </NavLink>
      <div
        className={show ? "Navigation show" : "Navigation"}
        onClick={() => setShow(!show)}
      >
        <div className="Nav__button"></div>
        <div className="Nav__button"></div>
        <div className="Nav__button"></div>
      </div>
      <div className={show ? "navbar active" : "navbar"}>
        <ul className="navbar-nav">
          <li className="Nav__item">
            <NavLink to="/" className="Nav__link ">
              Oyekanmi
            </NavLink>
          </li>
          <li className="Nav__item">
            <NavLink to="/projects" className="Nav__link ">
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
