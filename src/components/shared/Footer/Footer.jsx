import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-teal-950 text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Row 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>123 Main Street</p>
            <p>City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Row 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <p>Monday - Friday: 10am - 9pm</p>
            <p>Saturday: 11am - 10pm</p>
            <p>Sunday: Closed</p>
          </div>

          {/* Row 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>

          {/* Row 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p>Subscribe to our newsletter for updates and promotions.</p>
            <div className="mt-2 flex">
            <input type="email" placeholder="Your email " name="email" className="p-3 rounded text-black font-semibold mr-1 "  />
            <button className="bg-yellow-500 text-blue-800 rounded-r-md p-2 focus:outline-none">
              Subscribe
            </button>
       
          </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>&copy; 2023 Restaurant Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
