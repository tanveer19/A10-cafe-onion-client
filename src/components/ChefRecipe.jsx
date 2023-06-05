import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipe = () => {
  const chefrecipe = useLoaderData();
  const { id, picture, name, bio, likes, recipes, exp } = chefrecipe;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-96" src={picture} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          Likes: {likes}
          <br /> Recipes: {recipes}
          <br />
          Experience: {exp}
          <br /> Bio: {bio}
        </p>
      </div>
    </div>
  );
};

export default ChefRecipe;
