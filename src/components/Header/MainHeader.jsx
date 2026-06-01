import "./style/MainHeader.css";

import { useState } from "react";

import logo from "../../assets/images/logo.png";

import {
  FaSearch,
  FaRegUser,
  FaRegHeart,
  FaShoppingBag,
  FaPhoneAlt,
  FaAngleDown,
  FaBars,
} from "react-icons/fa";

const MainHeader = () => {

  /* DROPDOWN OPEN/CLOSE */
  const [showCategory, setShowCategory] = useState(false);

  /* SELECTED CATEGORY */
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (

    <div className="main-header">

      <div className="container">

        <div className="main-header-wrapper">

          <div className="left-mibile-menu">
          <a href="#" className="main-icon d-block d-lg-none">
            <FaBars />
          </a>

          {/* LOGO */}
          <div className="logo">

            <img src={logo} alt="logo" />

          </div>
          </div>


          {/* SEARCH */}
          <div className="header-search d-none d-lg-flex">

            <input
              type="text"
              placeholder="Search..."
            />

            {/* CATEGORY DROPDOWN */}
            <div
              className="category-wrapper"
              onClick={() => setShowCategory(!showCategory)}
            >

              <div className="category-btn">

                {selectedCategory}

                <FaAngleDown />

              </div>

              {
                showCategory && (
                  <ul className="category-menu">

                    <li
                      className=""
                      onClick={() => {
                        setSelectedCategory("All Categories");
                        setShowCategory(false);
                      }}
                    >
                      All Categories
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Fashion");
                        setShowCategory(false);
                      }}
                    >
                      Fashion
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Women");
                        setShowCategory(false);
                      }}
                    >
                      - Women
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Men");
                        setShowCategory(false);
                      }}
                    >
                      - Men
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Jewellery");
                        setShowCategory(false);
                      }}
                    >
                      - Jewellery
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Kids Fashion");
                        setShowCategory(false);
                      }}
                    >
                      - Kids Fashion
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Electronics");
                        setShowCategory(false);
                      }}
                    >
                      Electronics
                    </li>

                    <li
                    className="active"
                      onClick={() => {
                        setSelectedCategory("Smart TVs");
                        setShowCategory(false);
                      }}
                    >
                      - Smart TVs
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Cameras");
                        setShowCategory(false);
                      }}
                    >
                      - Cameras
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Games");
                        setShowCategory(false);
                      }}
                    >
                      - Games
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Home & Garden");
                        setShowCategory(false);
                      }}
                    >
                      Home & Garden
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Motors");
                        setShowCategory(false);
                      }}
                    >
                      Motors
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Cars and Trucks");
                        setShowCategory(false);
                      }}
                    >
                      - Cars and Trucks
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Motorcycles");
                        setShowCategory(false);
                      }}
                    >
                      - Motorcycles & Powersports
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Parts & Accessories");
                        setShowCategory(false);
                      }}
                    >
                      - Parts & Accessories
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Boats");
                        setShowCategory(false);
                      }}
                    >
                      - Boats
                    </li>

                    <li
                      onClick={() => {
                        setSelectedCategory("Auto Tools");
                        setShowCategory(false);
                      }}
                    >
                      - Auto Tools & Supplies
                    </li>

                  </ul>
                )
              }

            </div>

            {/* SEARCH BUTTON */}
            <button>
              <FaSearch />
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="header-right">

            {/* CALL */}
            <div className="header-call d-none d-lg-flex">

              <FaPhoneAlt className="call-icon" />

              <div>

                <span>CALL US NOW</span>

                <h4>+123 5678 890</h4>

              </div>

            </div>

            {/* ICONS */}
            <div className="header-icons">

              <a href="#" className="search-icon main-icon d-block d-lg-none">
                <FaSearch />
              </a>

              <a href="#" className="main-icon">
                <FaRegUser />
              </a>

              <a href="#" className="main-icon">
                <FaRegHeart />
              </a>

              <a href="#" className="main-icon">

                <div className="cart-icon">

                  <FaShoppingBag />

                  <span>3</span>

                </div>

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MainHeader;