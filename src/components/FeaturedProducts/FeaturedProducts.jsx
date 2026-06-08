import "./style/FeaturedProducts.css";

import ProductCard from "./ProductCard";
import { featuredProductsData } from "../../data/featuredProductsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="container">

        <div className="featured-header">
          <div className="section-title">
            <h2>FEATURED PRODUCTS</h2>
          </div>

          <div className="featured-pagination"></div>
        </div>

        <div className="product-slider">
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: ".featured-pagination",
              clickable: true,
            }}
            loop={false}
            spaceBetween={25}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {featuredProductsData.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;