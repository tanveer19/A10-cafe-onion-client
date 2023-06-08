import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chef from "./Chef";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch(
      "https://2-17-a10-chef-recipe-hunter-server-tanveer19.vercel.app/chefs"
    )
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
    </div>
  );
};

export default Home;
