import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
// import compass from "../images/compass.png";
// import backpack from "../images/backpack.png";
import back from "../images/back.png";

function Navbar() {
  const [isDetailsPageActive, setDetailsPageActive] = useState(false);
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();
  const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === "PUSH") {
        setLocationKeys([location.key]);
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          if (location.pathname === "/my-pokemon-action") {
            history.replace("/");
          } else {
            setLocationKeys(([_, ...keys]) => keys);
          }
        } else {
          if (location.pathname === "/my-pokemon-action") {
            history.replace("/");
          } else {
            setLocationKeys((keys) => [location.key, ...keys]);
          }
        }
      }
    });
  }, [locationKeys, history]);

  useEffect(() => {
    if (history.location.pathname === "/my-pokemon-action") {
      window.addEventListener("beforeunload", history.replace("/"));
    }
  }, [history]);

  return (
    <>
      <nav
        className={!isDetailsPageActive && isMobile ? "display-none" : "navbar"}
      >
        <div className="navbar-container">
          <Link className="navbar-links" to="/pokemon-details" exact>
            <NavItem text="POKEMON" />
          </Link>
          
          <ul className={isMobile ? "navbar-menu flex-start" : "navbar-menu"}>
            <li
              className={
                isDetailsPageActive && isMobile ? "navbar-item" : "display-none"
              }
            >
              <div className="navbar-links back" onClick={handleBackClick}>
                <NavItem img={back} text="BACK" />
              </div>
            </li>
            <li
              className={
                isDetailsPageActive && isMobile ? "display-none" : "navbar-item"
              }
            >
              <NavLink className="navbar-links" to="/" exact>
                <NavItem text="EXPLORE" />
              </NavLink>
            </li>
            <li
              className={
                isDetailsPageActive && isMobile ? "display-none" : "navbar-item"
              }
            >
              <NavLink className="navbar-links" to="/my-pokemon-list">
                <NavItem text="MY POKEMON LIST" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <nav
        className={
          isDetailsPageActive || isMobile ? "navbar-bottom" : "display-none"
        }
      >
        <div className="navbar-container">
          <ul className="navbar-menu">
            <li
              className={
                isDetailsPageActive && !isMobile
                  ? "display-none"
                  : "navbar-item"
              }
            >
              <NavLink className="navbar-links" to="/" exact>
                <NavItem text="EXPLORE" />
              </NavLink>
            </li>
            <li
              className={
                isDetailsPageActive && !isMobile
                  ? "display-none"
                  : "navbar-item"
              }
            >
              <NavLink className="navbar-links" to="/my-pokemon-list">
                <NavItem text="MY POKEMON LIST" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );

  function handleBackClick() {
    history.goBack();
  }
}

function NavItem({ img, text }) {
  return (
    <>
      <p className="navbar-text">{text}</p>
    </>
  );
}

export default Navbar;
