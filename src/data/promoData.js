import watch from "../assets/images/watch.jpg";
import headphones from "../assets/images/headphones.jpg";
import brand from "../assets/images/brand.jpg";
import flshsale from "../assets/images/flash-sale.jpg";
import phone from "../assets/images/phone.jpg";
import promo from "../assets/images/promo.jpg";
import shoes from "../assets/images/shoes.jpg";
import trandingsale from "../assets/images/trandingsale.jpg";
import chair from "../assets/images/chair.jpg";

const promoData = {
  leftColumn: [
    {
      id: 1,
      className: "watch",
      image: watch,
      title: "40% OFF",
      subtitle: "Mega Sale",
    },
    {
      id: 2,
      className: "trandingsale",
      image: trandingsale,
      title: "Electronic Deals",
      subtitle: "Exclusive Coupon",
    },
    {
      id: 3,
      className: "phone",
      image: phone,
      title: "Flash Sale",
      subtitle: "Starting At ₹1999",
    },
  ],

  middleColumn: [
    {
      id: 4,
      className: "headphones",
      image: headphones,
      title: "Electronic Deals",
      subtitle: "Starting At ₹99",
    },
    {
      id: 5,
      className: "shoes",
      image: shoes,
      title: "50% OFF",
      subtitle: "Exclusive Shoes",
    },
    {
      id: 6,
      className: "brand",
      image: brand,
      title: "Amazing Collection",
      subtitle: "Check Discounts",
    },
  ],

  rightColumn: [
    {
      id: 7,
      className: "flshsale",
      image: flshsale,
      title: "Top Brands",
      subtitle: "Smartphones",
    },
    {
      id: 8,
      className: "chair",
      image: chair,
      title: "More Than 20 Brands",
      subtitle: "Check This Sale",
    },
    {
      id: 9,
      className: "promo",
      image: promo,
      title: "Deal Promos",
      subtitle: "Starting At ₹99",
    },
  ],
};

export default promoData;