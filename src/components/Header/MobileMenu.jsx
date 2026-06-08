import { useState } from "react";
import {
  FaTimes,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";

import "./style/MobileMenu.css";
import { mobileMenuData } from "../../data/mobileMenuData";

function MobileMenu({ isOpen, setIsOpen }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${
          isOpen ? "active" : ""
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`mobile-sidebar ${
          isOpen ? "active" : ""
        }`}
      >
        <div className="mobile-header">
          <h3></h3>

          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <ul className="mobile-menu">
          {mobileMenuData.map((item, index) => (
            <li key={index}>
              {item.submenu.length > 0 ? (
                <>
                  <div
                    className="menu-title"
                    onClick={() => toggleMenu(index)}
                  >
                    <span>{item.title}</span>

                    {openMenu === index ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </div>

                  <div
                    className={`submenu ${
                      openMenu === index
                        ? "show"
                        : ""
                    }`}
                  >
                    {item.submenu.map(
                      (subItem, i) => (
                        <a
                          href="#"
                          key={i}
                        >
                          {subItem}
                        </a>
                      )
                    )}
                  </div>
                </>
              ) : (
                <a
                  href="#"
                  className="menu-link"
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;