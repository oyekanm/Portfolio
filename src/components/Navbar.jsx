import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="">
      <div className="container">
        <NavLink to="/" className="">
          O|B
        </NavLink>
        <div className="">
          <ul className="navbar-nav">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                Oyekanmi
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "Nav__link Nav__link--active" : "Nav__link "
                }
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
