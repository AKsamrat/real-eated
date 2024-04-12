import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import '../../src/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img className="h-[500px]" src="slide2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px]" src="slide3.avif" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px]" src="slide4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px]" src="slide5.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px]" src="slide6.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;
