import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Images/logo.png";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <>
      <nav className="header__maincontiner">
        <NavLink to="/home" exact={true} strict>
          <img src={Logo} alt="logo_image" />
        </NavLink>

        {/* sony part */}

        <ul className="nav">
          <li>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/home"
              strict={true}
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/"
              strict={true}
              exact
            >
              {location.pathname === "/" ? "LogIn" : "LogOut"}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div style={{ marginBottom: "120px" }}></div>
    </>
  );
}

export default Header;
