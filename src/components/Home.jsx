import React, { useEffect, useState } from "react";
import Chef from "./Chef";
import Gallery from "./Gallery";
import GridSections from "./GridSections";
import Hero from "./Hero";
import Contact from "./Contact";
import Menu from "./Menu";
import Card from "./Card";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://2-16-a10-chef-recipe-hunter-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-white">
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
      <div className="">
        <h4 className="text-5xl text-center my-3"> All Chefs</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 p-2 w-full max-w-7xl mx-auto">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </div>

      <GridSections></GridSections>

      <Gallery></Gallery>
      <Hero></Hero>
      <Contact></Contact>
      <Menu></Menu>
      <Card></Card>
    </div>
  );
};

export default Home;
