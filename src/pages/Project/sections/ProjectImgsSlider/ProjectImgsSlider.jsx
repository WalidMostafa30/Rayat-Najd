import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./ProjectImgsSlider.css"; 

const ProjectImgsSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      {/* ✅ السلايدر الرئيسي */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-2xl overflow-hidden shadow-lg"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={img.src}
              alt="project"
              className="w-full h-[250px] 2xl:h-[300px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ الصور المصغّرة */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={images.length >= 3 ? 3 : images.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper mt-4"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative cursor-pointer group">
              <img
                src={img.src}
                alt="thumb"
                className="w-full h-20 object-cover rounded-lg border-2 border-transparent 
                group-hover:border-mainClr opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectImgsSlider;
