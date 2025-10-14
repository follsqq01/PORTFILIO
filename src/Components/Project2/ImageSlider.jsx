import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // без Pagination
import "swiper/css";
import "swiper/css/navigation";

import book1 from "../../assets/book1_echo.jpg";
import book2 from "../../assets/book2_echo.jpg";
import book3 from "../../assets/book3_echo.jpg";
import book4 from "../../assets/book4_echo.jpg";
import book5 from "../../assets/book5_echo.jpg";
import book6 from "../../assets/book6_echo.jpg";
import book7 from "../../assets/book7_echo.jpg";
import book8 from "../../assets/book8_echo.jpg";
import book9 from "../../assets/book9_echo.jpg";
import book10 from "../../assets/book10_echo.jpg";
import book11 from "../../assets/book11_echo.jpg";
import book12 from "../../assets/book12_echo.jpg";
import book13 from "../../assets/book13_echo.jpg";
import book14 from "../../assets/book14_echo.jpg";
import book15 from "../../assets/book15_echo.jpg";

const images = [
  book1,
  book2,
  book3,
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
];

const ImageSlider = () => {
  return (
    <div className="project-slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={3.125} // ~30px
        slidesPerView={1}
        navigation // стрелки включены
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
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
