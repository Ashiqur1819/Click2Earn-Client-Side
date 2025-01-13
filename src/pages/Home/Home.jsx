import Carousel from "./Carousel";
import FeaturedJobs from "./FeaturedJobs";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
      <div>
        <div>
          <Carousel></Carousel>
        </div>
        <div className="mt-20 px-4 md:px-6 lg:px-8">
          <div>
            <FeaturedJobs></FeaturedJobs>
          </div>
          <div className="mt-20">
            <Testimonials></Testimonials>
          </div>
        </div>
      </div>
    );
};

export default Home;