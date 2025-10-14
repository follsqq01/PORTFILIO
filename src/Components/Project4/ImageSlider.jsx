import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // без Pagination
import "swiper/css";
import "swiper/css/navigation";

import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";
import book4 from "../../assets/book4.jpg";
import book5 from "../../assets/book5.jpg";
import book6 from "../../assets/book6.jpg";
import book7 from "../../assets/book7.jpg";
import book8 from "../../assets/book8.jpg";

const images = [book1, book2, book3, book4, book5, book6, book7, book8];

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
