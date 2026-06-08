import "./style/Sidebar.css";
import { FaTimes } from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>

      <div className="sidebar-header">
        <h3>MENU</h3>

        <button onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>
      </div>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    </div>
  );
}

export default Sidebar;