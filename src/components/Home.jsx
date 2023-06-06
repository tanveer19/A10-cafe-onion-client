import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
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
        <h4 className="text-3xl text-center my-3"> All Chefs</h4>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {chefs.map((chef) => (
            <div key={chef.id}>
              <img className="w-40" src={chef.picture} alt="" />
              <h3>Name: {chef.name}</h3>
              <h4>Experience: {chef.exp}</h4>
              <h4>Number of recipes: {chef.recipes}</h4>
              <h4>Likes: {chef.likes}</h4>
              <h4>
                {Array.isArray(chef.recipe_1) &&
                  chef.recipe_1.map((data) => (
                    <div key={chef.id}>{data.recipe_name}</div>
                  ))}
              </h4>
              <Link to={`/chef/${chef.id}`}>
                <button className="btn btn-accent my-2">View Recipe</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
