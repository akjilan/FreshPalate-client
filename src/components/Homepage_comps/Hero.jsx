import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-green-200 text-black h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <p className="text-lg">
            Enjoy delicious dishes crafted with love and passion.
          </p>
          <button className="bg-yellow-500 text-green-200 px-6 py-2 mt-4 rounded-full">
            View Menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
