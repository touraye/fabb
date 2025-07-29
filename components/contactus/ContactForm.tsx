// components/ContactForm.tsx
import { FaUser, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className=" container mt-[70px]   px-4">
      {/* Google Map */}
      <div className="w-full h-80 mb-8">
        <iframe
          title="Google Map"
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.354151622897!2d-0.19745794886483424!3d5.603716712499619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99c6bc086a4b%3A0x8f569ee8c6d2b0f7!2s4%20Templesi%20Ln%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1707225043761!5m2!1sen!2sgh"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Have Any Questions?</h2>
        <p className="text-gray-600 mt-2">
          We look forward to hearing from you and providing the assistance you
          require.
        </p>
      </div>

      <form className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-3 pl-10"
            />
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 pl-10"
            />
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Message Field */}
        <div className="mt-4">
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md p-3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-800 transition"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
