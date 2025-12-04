import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img from "../../../assets/images/project-img.jpg";

const list = [img, img, img, img, img];

const ContactSlider = () => {
  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden hidden lg:block lg:col-span-2">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {list.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full relative">
              <img src={item} className="w-full h-full object-cover" alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination على اليمين */}
      <div className="custom-pagination absolute z-10 right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3"></div>
    </div>
  );
};

export default ContactSlider;
