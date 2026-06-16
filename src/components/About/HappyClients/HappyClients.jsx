import "./style/HappyClients.css";
import { testimonialData } from "../../../data/testimonialData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { FaQuoteLeft } from "react-icons/fa";

const HappyClients = () => {
  return (
    <section className="happy-clients-section">
      <div className="container">
        <h2 className="section-title story-title">
          HAPPY CLIENTS
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <div className="client-info">
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h3>{item.name}</h3>
                    <span>
                      {item.designation}
                    </span>
                  </div>
                </div>

                <div className="review">
                  <FaQuoteLeft className="quote-icon" />

                  <p>{item.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HappyClients;