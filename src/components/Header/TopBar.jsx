import "./style/TopBar.css";

import { useState } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaAngleDown,
} from "react-icons/fa";

const TopBar = () => {

  /* Separate States */

  const [showLanguage, setShowLanguage] = useState(false);

  const [showCurrency, setShowCurrency] = useState(false);

  return (
    <div className="top-bar">

      <div className="container">

        <div className="top-bar-wrapper">

          {/* Left Side */}
          <div className="top-bar-left">

            <p>
              FREE RETURNS. STANDARD SHIPPING ORDERS $99+
            </p>

          </div>

          {/* Right Side */}
          <div className="top-bar-right">

            {/* Menu */}
            <ul className="top-menu">

              <li><a href="#">My Account</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">My Wishlist</a></li>
              <li><a href="#">Cart</a></li>
              <li><a href="#">Log In</a></li>

            </ul>

            {/* Dropdowns */}
            <div className="top-dropdowns">

              {/* LANGUAGE */}
              <div
                className="currency-wrapper"
                onClick={() => setShowLanguage(!showLanguage)}
              >

                <div className="dropdown-item">
                  ENG <FaAngleDown />
                </div>

                {
                  showLanguage && (
                    <ul className="currency-menu">

                      <li>ENG</li>

                      <li>FRA</li>

                    </ul>
                  )
                }

              </div>

              {/* CURRENCY */}
              <div
                className="currency-wrapper"
                onClick={() => setShowCurrency(!showCurrency)}
              >

                <div className="dropdown-item">
                  USD <FaAngleDown />
                </div>

                {
                  showCurrency && (
                    <ul className="currency-menu">

                      <li>EUR</li>

                      <li>USD</li>

                    </ul>
                  )
                }

              </div>

            </div>

            {/* Social Icons */}
            <div className="top-social">

              <span className="icon-box">
                <FaFacebookF />
              </span>

              <span className="icon-box">
                <FaTwitter />
              </span>

              <span className="icon-box">
                <FaInstagram />
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TopBar;