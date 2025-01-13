import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Rating } from "react-simple-star-rating";
import client1 from "../../assets/client1.png"
import client2 from "../../assets/client2.png"
import client3 from "../../assets/client3.png"

const Testimonials = () => {
  return (
    <div>
      <h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center"
      >
        What Viewers Are Saying
      </h2>
      <div className="mt-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 text-center py-12">
              <RiDoubleQuotesL className="text-3xl text-green-600"></RiDoubleQuotesL>
              <p>
                I had an amazing experience browsing this website! The layout is
                clean and modern, and everything is easy to find. The movie
                recommendations are spot on, and I love how fast the site loads.
                I also appreciated the filter options to find movies by genre
                and rating. It’s a perfect site for movie lovers like me who
                want quick access to the best films. Keep up the great work!
              </p>
              <Rating initialValue={5}></Rating>
              <div className="flex items-center gap-3">
                <img src={client1} className="w-16" alt="" />
                <div>
                  <h3>
                    Alex Johnson
                  </h3>
                  <p>
                    New York, USA
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
