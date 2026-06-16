import { Link } from "react-router-dom";
import { FaHome, FaAngleRight } from "react-icons/fa";

const Breadcrumb = ({ title = "About Us" }) => {
  return (
    <div className="breadcrumb-section">
      <div className="container">
        <div className="breadcrumb-content">
          <Link to="/">
            <FaHome />
          </Link>

          <FaAngleRight className="breadcrumb-icon" />

          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;