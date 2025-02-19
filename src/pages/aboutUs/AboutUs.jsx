

const AboutUs = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-12">
        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Our Mission</h2>
          <p class="text-gray-600 leading-relaxed">
            Our mission is to empower individuals worldwide by providing an easy
            and accessible platform to earn rewards by completing simple tasks.
            We believe in creating an opportunity for everyone to generate
            income in a secure and transparent way.
          </p>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Why Choose Click2Earn?
          </h2>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <span class="font-medium text-gray-800">
                User-Friendly Interface:
              </span>{" "}
              Seamlessly browse and complete tasks.
            </li>
            <li>
              <span class="font-medium text-gray-800">
                Multiple Earning Opportunities:
              </span>{" "}
              Surveys, data entry, content moderation, and more.
            </li>
            <li>
              <span class="font-medium text-gray-800">Secure Payments:</span> We
              ensure timely and fair payouts.
            </li>
            <li>
              <span class="font-medium text-gray-800">Community-Centric:</span>{" "}
              We listen to our users and continually improve the platform.
            </li>
          </ul>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How It Works
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 rounded-sm shadow-sm">
              <h3 class="text-lg font-semibold text-gray-700">
                1. Sign Up & Create an Account
              </h3>
              <p class="text-gray-600">Join our platform quickly and easily.</p>
            </div>
            <div class="p-4 bg-gray-50 rounded-sm shadow-sm">
              <h3 class="text-lg font-semibold text-gray-700">
                2. Browse Available Tasks
              </h3>
              <p class="text-gray-600">
                Select from a variety of available tasks.
              </p>
            </div>
            <div class="p-4 bg-gray-50 rounded-sm shadow-sm">
              <h3 class="text-lg font-semibold text-gray-700">
                3. Complete Tasks & Earn Rewards
              </h3>
              <p class="text-gray-600">
                Finish tasks and get rewarded instantly.
              </p>
            </div>
            <div class="p-4 bg-gray-50 rounded-sm shadow-sm">
              <h3 class="text-lg font-semibold text-gray-700">
                4. Withdraw Your Earnings
              </h3>
              <p class="text-gray-600">
                Cash out securely through multiple payment methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;