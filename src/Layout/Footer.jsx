import React from "react";
import "../assets/CSS/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <h3>HealthPilot</h3>
          <p>
            Revolutionizing Healthcare with Technology and Compassion - Book,
            Check, and Laugh with WeCare
          </p>
          <ul className="socials">
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin-square" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © <span id="year">{new Date().getFullYear()}</span>{" "}
            <a href="#">@Team Bit Rains</a>{" "}
          </p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li>
                <a href>Home</a>
              </li>
              <li>
                <a href>About</a>
              </li>
              <li>
                <a href>Appointment</a>
              </li>
              <li>
                <a href>Doctor</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
