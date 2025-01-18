import faqImage from "../../assets/faq.jpg"
import { motion } from "motion/react";
const FAQs = () => {
    return (
      <div className="lg:grid grid-cols-2 gap-3 items-center bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="p-4 md:p-6 lg:p-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            FAQ
          </h2>
          <p className="max-w-3xl mx-auto mt-3 text-text-primary font-medium text-lg">
            Have questions? We’ve got answers! From sign-up to payouts, find
            everything you need to know in our FAQ section.
          </p>
          <img src={faqImage} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="p-4 md:p-6 lg:p-8"
        >
          <div className="collapse collapse-arrow bg-gray-50 rounded-none">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg font-medium">
              What is a micro-task?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Micro-tasks are small, simple tasks that can be completed online
                in a short amount of time, such as filling out surveys, testing
                apps, or performing data entry.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-50 rounded-none mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              Who can join this platform?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Anyone with an internet connection can join and start completing
                tasks.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-50 rounded-none mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              How much can I earn?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Your earnings depend on the number and type of tasks you
                complete. Each task has a different payout based on its
                complexity.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-50 rounded-none mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              When will I receive my payment?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Payments are processed within 3-5 business days after reaching
                the minimum withdrawal amount.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-50 rounded-none mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              Is there a minimum withdrawal amount?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Yes, the minimum withdrawal amount is $10.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-50 rounded-none mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              What kind of tasks are available?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Tasks include completing surveys, testing apps, writing reviews,
                social media engagement, and more.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-50 rounded-none mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              How do I create an account?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Click the "Register" button on the homepage, fill out the
                registration form, and verify your email address to get started.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-50 rounded-none mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              Is my personal information safe?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Yes, we prioritize your privacy and use advanced security
                measures to protect your data.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
};

export default FAQs;

