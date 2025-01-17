import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { RiDoubleQuotesL } from "react-icons/ri";
import client1 from "../../assets/1.jfif"
import client2 from "../../assets/2.jpg"
import client3 from "../../assets/3.jpg"
import client4 from "../../assets/4.jpg"
import client5 from "../../assets/5.jfif"
import client6 from "../../assets/6.jfif"
import client7 from "../../assets/7.jfif"
import reviewImage from "../../assets/review.png"



const Testimonials = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
        What Our Users Say
      </h2>
      <p className="max-w-3xl mx-auto text-center mt-3 text-gray-800">
        Your feedback matters! See what others are saying about their experience
        on Click2Earn. Share your own review and help us improve while guiding
        new users. Let’s grow together!
      </p>
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
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-3 text-center py-12">
              <RiDoubleQuotesL className="text-3xl text-text-primary"></RiDoubleQuotesL>
              <p>
                Click2Earn has transformed how I make extra money during my free
                time. The tasks are straightforward, and the payments are always
                on time. It's an excellent platform for anyone looking to
                supplement their income.
              </p>
              <div>
                <img src={reviewImage} className="w-40" alt="" />
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={client1}
                  className="w-16 h-16 object-cover rounded-full"
                  alt=""
                />
                <div className="text-left">
                  <h3 className="font-semibold">Jessica Morgan</h3>
                  <p className="text-sm text-gray-600">New York, USA</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 text-center py-12">
              <RiDoubleQuotesL className="text-3xl text-text-primary"></RiDoubleQuotesL>
              <p>
                As someone with a full-time job, I needed a platform that offers
                flexibility. Click2Earn fits perfectly into my schedule and
                provides a great way to earn on the side. Highly recommended!
              </p>
              <div>
                <img src={reviewImage} className="w-40" alt="" />
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={client2}
                  className="w-16 h-16 object-cover rounded-full"
                  alt=""
                />
                <div className="text-left">
                  <h3 className="font-semibold">Michael Anderson</h3>
                  <p className="text-sm text-gray-600">Paris, France</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 text-center py-12">
              <RiDoubleQuotesL className="text-3xl text-text-primary"></RiDoubleQuotesL>
              <p>
                Click2Earn offers a fantastic user experience and timely
                payments. However, I’d love to see an increase in the variety of
                higher-paying tasks. Overall, a trustworthy and reliable site.
              </p>
              <div>
                <img src={reviewImage} className="w-40" alt="" />
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={client3}
                  className="w-16 h-16 object-cover rounded-full"
                  alt=""
                />
                <div className="text-left">
                  <h3 className="font-semibold">James Miller</h3>
                  <p className="text-sm text-gray-600">Toronto, Canada</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 text-center py-12">
              <RiDoubleQuotesL className="text-3xl text-text-primary"></RiDoubleQuotesL>
              <p>
                This platform is incredibly transparent, and the payout process
                is smooth and hassle-free. The diverse tasks keep things
                interesting, and the support team is always responsive and
                helpful. A great experience overall!
              </p>
              <div>
                <img src={reviewImage} className="w-40" alt="" />
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={client4}
                  className="w-16 h-16 object-cover rounded-full"
                  alt=""
                />
                <div className="text-left">
                  <h3 className="font-semibold">Benjamin Thompson</h3>
                  <p className="text-sm text-gray-600">Sydney, Australia</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 text-center py-12">
              <RiDoubleQuotesL className="text-3xl text-text-primary"></RiDoubleQuotesL>
              <p>
                The tasks are easy to complete, and the interface is intuitive.
                While I’ve enjoyed my time on Click2Earn, speeding up the
                withdrawal process would make it even better.
              </p>
              <div>
                <img src={reviewImage} className="w-40" alt="" />
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={client5}
                  className="w-16 h-16 object-cover rounded-full"
                  alt=""
                />
                <div className="text-left">
                  <h3 className="font-semibold">Sophia Harris</h3>
                  <p className="text-sm text-gray-600">Berlin, Germany</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 text-center py-12">
              <RiDoubleQuotesL className="text-3xl text-text-primary"></RiDoubleQuotesL>
              <p>
                Click2Earn has been an absolute lifesaver! It’s perfect for
                earning extra income during my free time. The tasks are easy to
                understand, and the platform is user-friendly. Definitely a
                must-try for anyone looking to make money online!
              </p>
              <div>
                <img src={reviewImage} className="w-40" alt="" />
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={client6}
                  className="w-16 h-16 object-cover rounded-full"
                  alt=""
                />
                <div className="text-left">
                  <h3 className="font-semibold">Olivia Carter</h3>
                  <p className="text-sm text-gray-600">Stockholm, Sweden</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 text-center py-12">
              <RiDoubleQuotesL className="text-3xl text-text-primary"></RiDoubleQuotesL>
              <p>
                I’ve tried other platforms, but none of them compare to
                Click2Earn. It’s reliable, the payouts are consistent, and the
                transparency is commendable. Perfect for people who value their
                time and want quick returns!
              </p>
              <div>
                <img src={reviewImage} className="w-40" alt="" />
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={client7}
                  className="w-16 h-16 object-cover rounded-full"
                  alt=""
                />
                <div className="text-left">
                  <h3 className="font-semibold">Ava Moore</h3>
                  <p className="text-sm text-gray-600">Los Angeles, USA</p>
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
