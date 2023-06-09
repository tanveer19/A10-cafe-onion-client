import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chef from "./Chef";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://2-16-a10-chef-recipe-hunter-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {/* banner start */}

      <div
        className="hero h-96"
        style={{ backgroundImage: "url(/img/banner.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Cafe Onion</h1>
          </div>
        </div>
      </div>

      {/* chef section */}
      <div>
        <h4 className="text-5xl text-center my-3"> All Chefs</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 md:w-3/4 mx-auto p-2">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </div>

      {/* gallery */}

      <div className="">
        <h4 className="text-5xl text-center my-3"> Gallery</h4>

        <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img src="/img/gallery/gallery-1.jpg" className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src="/img/gallery/gallery-2.jpg" className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src="/img/gallery/gallery-3.jpg" className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src="/img/gallery/gallery-4.jpg" className="rounded-box" />
          </div>
        </div>
      </div>

      {/* menu item */}
      <h4 className="text-5xl text-center my-3"> Menu Item</h4>

      <div>
        <div className="h-96 carousel carousel-vertical rounded-box grid justify-center ">
          <div className="carousel-item h-full">
            <img src="/img/menu/menu-item-1.png" />
          </div>
          <div className="carousel-item h-full">
            <img src="/img/menu/menu-item-2.png" />
          </div>
          <div className="carousel-item h-full">
            <img src="/img/menu/menu-item-3.png" />
          </div>
          <div className="carousel-item h-full">
            <img src="/img/menu/menu-item-4.png" />
          </div>
          <div className="carousel-item h-full">
            <img src="/img/menu/menu-item-5.png" />
          </div>
          <div className="carousel-item h-full">
            <img src="/img/menu/menu-item-6.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
