import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // без Pagination
import "swiper/css";
import "swiper/css/navigation";

import book1 from "../../assets/wh_book1.png";
import book2 from "../../assets/wh_book2.png";
import book3 from "../../assets/wh_book3.png";
import book4 from "../../assets/wh_book4.png";
import book5 from "../../assets/wh_book5.png";
import book6 from "../../assets/wh_book6.png";
import book7 from "../../assets/wh_book7.png";
import book8 from "../../assets/wh_book8.png";
import book9 from "../../assets/wh_book9.png";
import book10 from "../../assets/wh_book10.png";
import book11 from "../../assets/wh_book11.png";
import book12 from "../../assets/wh_book12.png";
import book13 from "../../assets/wh_book13.png";
import book14 from "../../assets/wh_book14.png";
import book15 from "../../assets/wh_book15.png";
import book16 from "../../assets/wh_book16.png";
import book17 from "../../assets/wh_book17.png";

const images = [
  book1,
  book2,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10,
  book11,
  book12,
  book13,
  book14,
  book15,
  book16,
  book17,
];

const ImageSlider = () => {
  return (
    <div className="project-slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={3.125} // ~30px
        slidesPerView={1}
        // navigation // стрелки включены
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={800} // плавное переключение
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="slider-img-wrapper">
              <img
                src={src}
                alt={`book ${i + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
