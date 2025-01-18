import BestWorkers from "./BestWorkers";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
import FeaturedJobs from "./FeaturedJobs";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div>
          <Carousel></Carousel>
        </div>
        <div className="mt-20 px-4 md:px-6 lg:px-8">
          <div>
            <BestWorkers></BestWorkers>
          </div>
          <div className="mt-20">
            <FeaturedJobs></FeaturedJobs>
          </div>
          <div className="mt-20">
            <Testimonials></Testimonials>
          </div>
        </div>
        <div className="mt-20">
          <FAQs></FAQs>
        </div>
        <div className="mt-20 px-4 md:px-6 lg:px-8">
          <ContactUs></ContactUs>
        </div>
      </div>
    );
};

export default Home;