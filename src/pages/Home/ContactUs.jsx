import contactImage from "../../assets/contact.png"

const ContactUs = () => {
    return (
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          <form className="mt-6">
            <div className="form-control">
              <label className="label px-0">
                <span className="label-text font-medium">Name:</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter Your Name"
                className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label px-0">
                <span className="label-text font-medium">Email:</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                required
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label px-0">
                <span className="label-text font-medium">Description:</span>
              </label>
              <textarea
                name="description"
                className="textarea h-24 text-gray-700 text-sm input border border-gray-200 rounded-sm focus:border-pink-300 focus:outline-none"
                placeholder="Submission Details"
              ></textarea>
            </div>
            <div className="form-control mt-3 col-span-2">
              <button className="bg-bg-tertiary px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]">
                Send Message
              </button>
            </div>
          </form>
          <div>
            <img src={contactImage} alt="" />
          </div>
        </div>
      </div>
    );
};

export default ContactUs;