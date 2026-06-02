import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { bannerData } from "../../data/bannerData";

function HeroSlider() {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide-item">
              <img src={item.image} alt="" />

              <div className="slide-content">
                <p className="slide-subtitle">
                  {item.subTitle}
                </p>

                <h2 className="slide-title">
                  {item.title}
                </h2>

                <h1 className="slide-discount">
                  {item.discount}
                </h1>

                <div className="price-row">
                  <div className="price-box">
                    <span>STARTING AT</span>
                    <strong>{item.price}</strong>
                  </div>

                  <button className="main-btn">
                    GET YOURS!
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;