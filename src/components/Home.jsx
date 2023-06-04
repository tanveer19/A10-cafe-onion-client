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
        <h4> All Chefs</h4>
        <div>
          {chefs.map((chef) => (
            <p key={chef.id}>
              <Link to={`/chef/${chef.id}`}>{chef.name}</Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
