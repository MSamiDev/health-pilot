import React from "react";
import { Link } from "react-router-dom";
import HealthPilot from "../../../Layout/HealthPilot.png";

const Navbar = () => {
  let isArrayFunction = (inputArray) => {
    if (Array.isArray(inputArray) && inputArray.length !== 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div id="Navbar">
      <div class="usa-overlay"></div>
      <header class="usa-header usa-header--basic usa-header--megamenu padding-bottom-4 padding-top-6">
        <div class="usa-nav-container">
          <div class="usa-navbar">
            <div class="usa-logo margin-0" id="basic-mega-logo">
              <em class="usa-logo__text">
                <div className="display-flex flex-row align-items-center">
                  <Link to={"/"}>
                    <img
                      width={110}
                      height={110}
                      src={HealthPilot}
                      alt="logo"
                    />
                    <h3
                      className="display-inline-block padding-left-1"
                      style={{ color: "white" }}
                    >
                      HealthPilot Checker
                    </h3>
                  </Link>
                </div>
              </em>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
