import "./style/BrandSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { brandData } from "../../data/brandData";

function BrandSlider() {
  return (
    <section className="brand-slider">

      <div className="container">

        <Swiper
          slidesPerView={6}
          spaceBetween={50}
          loop={false}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            576: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            992: {
              slidesPerView: 5,
              spaceBetween: 50,
            },

            1200: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        >
          {brandData.map((brand) => (

            <SwiperSlide key={brand.id}>

              <div className="brand-item">

                <img
                  src={brand.image}
                  alt="brand"
                />

              </div>

            </SwiperSlide>

          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default BrandSlider;