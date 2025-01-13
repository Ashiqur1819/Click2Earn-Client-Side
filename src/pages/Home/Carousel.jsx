import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slideImage1 from "../../assets/1.png"
import slideImage2 from "../../assets/2.jpg"
import slideImage3 from "../../assets/3.jpg"




const Carousel = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-[400px] md:h-[550px] flex items-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(239, 246, 255, 0), rgba(239, 246, 255, 1)), url(${slideImage1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-24 max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl">
                Top Trending Tasks
              </h2>
              <p className="text-gray-800 mt-6 bg-white p-6 bg-opacity-40 rounded-sm">
                Browse through the most popular and highly-rated tasks on our
                platform. These tasks are not only easy to complete but also
                guarantee quick payments once you submit your proof. Start
                earning today and take the first step towards building a
                reliable income stream by completing simple tasks that
                everyone’s talking about!
              </p>
              <button className="bg-yellow-400 px-4 py-2 rounded-sm font-medium mt-12">
                Start Earning Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:h-[550px] flex items-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(239, 246, 255, 0), rgba(239, 246, 255, 1)), url(${slideImage2})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-24 max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl">
                New Opportunities Await
              </h2>
              <p className="text-gray-800 mt-6 bg-white p-6 bg-opacity-40 rounded-sm">
                Check out the latest micro-jobs added to our platform, and be
                among the first to grab them! Whether you’re looking for quick
                gigs or longer-term tasks, we have plenty of options that offer
                flexible schedules and great pay. With just a few simple steps,
                you can start earning big rewards—your next job is just a swipe
                away!
              </p>
              <button className="bg-yellow-400 px-4 py-2 rounded-sm font-medium mt-12">
                Start Earning Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:h-[550px] flex items-center"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(239, 246, 255, 0), rgba(239, 246, 255, 1)), url(${slideImage3})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-24 max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl">
                Earn More, Work Smart
              </h2>
              <p className="text-gray-800 mt-6 bg-white p-6 bg-opacity-40 rounded-sm">
                Unlock tasks that are perfectly suited to your skills and
                expertise. With a range of high-paying micro-jobs, you can
                maximize your earnings without spending hours working. Our
                platform connects you with tasks that are easy to complete yet
                rewarding. Say goodbye to tedious work and start earning smart
                with tasks designed for efficiency and quick payouts.
              </p>
              <button className="bg-yellow-400 px-4 py-2 rounded-sm font-medium mt-12">
                Start Earning Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
