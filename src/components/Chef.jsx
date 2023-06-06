import React from "react";
import { Link, useParams } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id } = useParams();
  return (
    <div>
      <img className="w-40" src={chef.picture} alt="" />
      <h3>Name: {chef.name}</h3>
      <h4>Experience: {chef.exp}</h4>
      <h4>Number of recipes: {chef.recipes}</h4>
      <h4>Likes: {chef.likes}</h4>
      <h4>
        {/* {Array.isArray(chef.recipe_details) &&
          chef.recipe_details.map((data) => (
            <div key={chef.id}>{data.recipe_name}</div>
          ))} */}
      </h4>
      <Link to={`/chefrecipe/${chef.id}`}>
        <button className="btn btn-accent my-2">View Recipe</button>
      </Link>
    </div>
  );
};

export default Chef;
