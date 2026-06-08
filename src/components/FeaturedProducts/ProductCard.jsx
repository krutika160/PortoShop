import {
  LuShoppingBag,
  LuHeart,
} from "react-icons/lu";

import { FaStar } from "react-icons/fa";

function ProductCard({ item }) {
  return (
    <div className="featured-card">

      <div className="featured-image">

        {item.hot && (
          <span className="hot-badge">
            HOT
          </span>
        )}

        {item.discount && (
          <span className="discount-badge">
            {item.discount}
          </span>
        )}

        <img
          src={item.image}
          alt=""
        />

        {/* Hover Content */}

        <div className="hover-actions">

          <button className="cart-btn">
            <LuShoppingBag />
          </button>

          <button className="quick-view">
            QUICK VIEW
          </button>

        </div>

      </div>

      <div className="featured-content">

        <div className="content-top">

          <span>{item.category}</span>

          <LuHeart />

        </div>

        <h3>{item.title}</h3>

        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div className="price">
          <del>{item.oldPrice}</del>
          <strong>{item.price}</strong>
        </div>

      </div>

    </div>
  );
}

export default ProductCard;