import { useState } from "react";
import { Contact } from "lucide-react";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData,
      [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow-md">

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Get in Touch
            </h2>

            <p className="text-gray-600">
              Have questions or feedback? Reach out to us anytime.
            </p>

            <div className="text-sm text-gray-700 space-y-2">
              <p className="flex gap-2 "> <FaAddressCard/> Islamabad, Pakistan</p>
              <p className="flex gap-2"> <MdEmail/> support@yourapp.com</p>
              <p className="flex gap-2"> <Contact/> +92 300 1234567</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;