import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chef from "./Chef";
import Gallery from "./Gallery";
import GridSections from "./GridSections";

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
      <div className="bg-[#eeeeee]">
        <h4 className="text-5xl text-center my-3"> All Chefs</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 md:w-3/4 mx-auto p-2">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </div>

      <GridSections></GridSections>

      <Gallery></Gallery>

      {/* menu item */}
      <h4 className="text-5xl text-center my-3"> Menu Item</h4>

      <div className="w-1/2 mx-auto">
        <div className="carousel ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="/img/menu/menu-item-1.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="/img/menu/menu-item-2.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="/img/menu/menu-item-3.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="/img/menu/menu-item-4.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
