import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slideImage1 from "../../assets/slide1.png";
import slideImage2 from "../../assets/slide2.jpg";
import slideImage3 from "../../assets/slide3.jpg";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Carousel = () => {

  const [currentUser] = useUser()

  return (
    <div className="relative z-0">
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
            className="h-[400px] md:h-[550px] flex md:items-center px-4 md:px-6 lg:px-8 pt-12"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(239, 246, 255, 0), rgba(239, 246, 255, 1)), url(${slideImage1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              initial={{ transform: "translateX(-500px)" }}
              animate={{ transform: "translateX(0px)" }}
              transition={{
                ease: "easeOut",
                duration: 1,
              }}
              className="lg:mx-24 lg:max-w-2xl"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl text-black">
                Top Trending Tasks
              </h2>
              <p className="text-gray-800 text-sm text-justify md:mt-6 bg-white p-6 bg-opacity-40 rounded-sm">
                Browse through the most popular and highly-rated tasks on our
                platform. These tasks are not only easy to complete but also
                guarantee quick payments once you submit your proof. Start
                earning today and take the first step towards building a
                reliable income stream by completing simple tasks that
                everyone’s talking about!
              </p>
              <div className="md:mt-12">
                <Link
                  to={
                    currentUser?.role === "Worker"
                      ? "/dashboard/workerHome"
                      : currentUser?.role === "Buyer"
                      ? "/dashboard/buyerHome"
                      : currentUser?.role === "Admin"
                      ? "/dashboard/adminHome"
                      : "/login"
                  }
                >
                  <SecondaryButton label=" Start Earning Now"></SecondaryButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:h-[550px] flex md:items-center px-4 md:px-6 lg:px-8 pt-12"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(239, 246, 255, 0), rgba(239, 246, 255, 1)), url(${slideImage2})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="lg:mx-24 lg:max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl text-black">
                New Opportunities Await
              </h2>
              <p className="text-gray-800 text-sm md:mt-6 text-justify bg-white p-6 bg-opacity-40 rounded-sm">
                Check out the latest micro-jobs added to our platform, and be
                among the first to grab them! Whether you’re looking for quick
                gigs or longer-term tasks, we have plenty of options that offer
                flexible schedules and great pay. With just a few simple steps,
                you can start earning big rewards—your next job is just a swipe
                away!
              </p>
              <div className="md:mt-12">
                <Link
                  to={
                    currentUser?.role === "Worker"
                      ? "/dashboard/workerHome"
                      : currentUser?.role === "Buyer"
                      ? "/dashboard/buyerHome"
                      : currentUser?.role === "Admin"
                      ? "/dashboard/adminHome"
                      : "/login"
                  }
                >
                  <SecondaryButton label=" Start Earning Now"></SecondaryButton>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:h-[550px] flex md:items-center px-4 md:px-6 lg:px-8 pt-12"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(239, 246, 255, 0), rgba(239, 246, 255, 1)), url(${slideImage3})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="lg:mx-24 lg:max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl text-black">
                Earn More, Work Smart
              </h2>
              <p className="text-gray-800 text-sm md:mt-6 text-justify bg-white p-6 bg-opacity-40 rounded-sm">
                Unlock tasks that are perfectly suited to your skills and
                expertise. With a range of high-paying micro-jobs, you can
                maximize your earnings without spending hours working. Our
                platform connects you with tasks that are easy to complete yet
                rewarding. Say goodbye to tedious work and start earning smart
                with tasks designed for efficiency and quick payouts.
              </p>
              <div className="md:mt-12">
                <Link
                  to={
                    currentUser?.role === "Worker"
                      ? "/dashboard/workerHome"
                      : currentUser?.role === "Buyer"
                      ? "/dashboard/buyerHome"
                      : currentUser?.role === "Admin"
                      ? "/dashboard/adminHome"
                      : "/login"
                  }
                >
                  <SecondaryButton label=" Start Earning Now"></SecondaryButton>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
