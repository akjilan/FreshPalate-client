import React from "react";
import MapComponent from "../../utils/Location/Location";
const Contact = () => {
  return (
    <div className="grid grid-cols-2 gap-3 container lg:w-3/4 my-14 mx-auto ">
      <div>
        <section className="bg-gray-100 py-7 px-5 rounded-md">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold text-center mb-8">
                Contact Us
              </h2>
              <form className="grid grid-cols-1 gap-6">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className="my-auto z-10">
        <MapComponent></MapComponent>
      </div>
    </div>
  );
};

export default Contact;
