import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";

import "../Navbar/styles.css";

export const Navbar = () => {
  const [isLanding, setIsLanding] = useState(true);
  const [isCarMoving, setIsCarMoving] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const navigate = useNavigate();

  const handleLandingClick = () => {
    setIsCarMoving(true);

    setTimeout(() => {
      setIsLanding(false); // Exit landing view
      setIsCarMoving(false); // Reset car animation
      setShowLinks(true); // Show navbar links
    }, 1000); // Match car animation duration
  };

  const handleNavbarClick = () => {
    setIsCarMoving(true);

    setTimeout(() => {
      setIsCarMoving(false); // Reset car animation
      navigate("/"); // Redirect to homepage
      setShowLinks(true); // Ensure links are displayed
    }, 800); // Match the car movement duration
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      {isLanding ? (
        <div className="landing-container">
          <h1 className="landing-title" onClick={handleLandingClick}>
            Soul Space{" "}
            <i
              className={`fa-solid fa-car car-icon ${
                isCarMoving ? "move-car" : ""
              }`}
            ></i>
          </h1>
          <p
            className="landing-instruction"
            onClick={handleLandingClick}
            role="button"
          >
            Click to start
          </p>
        </div>
      ) : (
        <nav>
          <div className="nav-left">
            <h1
              className="text-2xl font-bold flex items-center gap-2 navbar-title"
              onClick={handleNavbarClick}
            >
              Soul Space{" "}
              <i
                className={`fa-solid fa-car car-icon ${
                  isCarMoving ? "move-car-half" : ""
                }`}
              ></i>
            </h1>
          </div>
          <div
            className={`nav-right ${
              showLinks ? "show-links" : "hide-links"
            }`}
          >
            <ul>
              <li>
                <NavLink to={!Auth.loggedIn() ? `/login` : `/me`}>
                  {!Auth.loggedIn()
                    ? "Login"
                    : `${Auth.getProfile().data.username}'s profile`}
                </NavLink>
              </li>
              <li>
                {!Auth.loggedIn() ? (
                  <NavLink to="/signup">Signup</NavLink>
                ) : (
                  <NavLink className="logout" onClick={logout} to="/">
                    Logout
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};
