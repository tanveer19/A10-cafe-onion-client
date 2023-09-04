import React from "react";

const Hero = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-3">About Us</h1>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/img/about.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="mb-5 text-2xl">
              Experience the artistry of Cafe Onion's cuisine through our
              selection of signature dishes. Each plate is a masterpiece that
              marries flavors, textures, and presentation in perfect harmony.
              Explore our menu to indulge in exclusive dishes.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
