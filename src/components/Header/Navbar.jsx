import "./style/Navbar.css";

import { Link, NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

import { navbarData } from "../../data/megaMenuData";
import megaBanner from "../../assets/images/menu-banner.jpg";

const Navbar = () => {
  return (
    <nav className="navbar-section d-none d-lg-flex">
      <div className="container">
        <div className="navbar-wrapper">
          <ul className="navbar-menu">
            
            <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "active" : ""
    }
    end
  >
    Home
  </NavLink>
</li>

            <li className="menu-wrapper">
              <div className="menu-item">
                <a href="#">
                  Categories
                  <FaAngleDown />
                </a>
              </div>

              <div className="mega-menu">
                {navbarData[0].megaMenu.map((column, index) => (
                  <div className="mega-column" key={index}>
                    <h4>{column.title}</h4>

                    {column.links.map((link, i) => (
                      <a href="#" key={i}>
                        {link}
                      </a>
                    ))}
                  </div>
                ))}

                <div className="mega-banner">
                  <img src={megaBanner} alt="banner" />

                  <div className="banner-content">
                    <span>UP TO</span>
                    <h3>50%</h3>
                    <p>OFF</p>

                    <button>SHOP NOW</button>
                  </div>
                </div>
              </div>
            </li>

            <li className="menu-wrapper">
              <div className="menu-item">
                <a href="#">
                  Products
                  <FaAngleDown />
                </a>
              </div>

              <div className="mega-menu">
                {navbarData[1].megaMenu.map((column, index) => (
                  <div className="mega-column" key={index}>
                    <h4>{column.title}</h4>

                    {column.links.map((link, i) => (
                      <a href="#" key={i}>
                        {link}
                      </a>
                    ))}
                  </div>
                ))}

                <div className="mega-banner">
                  <img src={megaBanner} alt="banner" />

                  <div className="banner-content">
                    <span>UP TO</span>
                    <h3>50%</h3>
                    <p>OFF</p>

                    <button>SHOP NOW</button>
                  </div>
                </div>
              </div>
            </li>

            <li className="menu-wrapper">
              <div className="menu-item">
                <a href="#">
                  Pages
                  <FaAngleDown />
                </a>
              </div>

              <div className="pages-menu">
                {navbarData[2].links.map((item, index) =>
                  typeof item === "object" ? (
                    <div className="submenu-wrapper" key={index}>
                      <a href="#">
                        {item.title}
                        <span>›</span>
                      </a>

                      <div className="submenu">
                        {item.submenu.map((subItem, i) => (
                          <a href="#" key={i}>
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a href="#" key={index}>
                      {item}
                    </a>
                  )
                )}
              </div>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li className="menu-wrapper">
              <div className="menu-item">
                <a href="#">
                  Elements
                  <FaAngleDown />
                </a>
              </div>

              <div className="pages-menu">
                {navbarData[3].links.map((item, index) =>
                  typeof item === "object" ? (
                    <div className="submenu-wrapper" key={index}>
                      <a href="#">
                        {item.title}
                        <span>›</span>
                      </a>

                      <div className="submenu">
                        {item.submenu.map((subItem, i) => (
                          <a href="#" key={i}>
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a href="#" key={index}>
                      {item}
                    </a>
                  )
                )}
              </div>
            </li>

           

            <li>
              <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="navbar-offers">
            <span>Special Offer!</span>
            <span>Buy Porto!</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;