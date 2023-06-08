import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipe = () => {
  const chefrecipe = useLoaderData();
  const { picture, name, bio, likes, recipes, exp } = chefrecipe;

  // disable button
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // for favorite
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (id) => {
    setIsFavorite(!isFavorite);
    toast("Added to Favorite!");
    setIsButtonDisabled(true);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-96" src={picture} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div>
          Likes: {likes}
          <br />
          Recipes: {recipes}
          <br />
          Experience: {exp}
          <br />
          Bio: {bio}
          <br />
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Recipe Name</th>
                  <th>Ingredient</th>
                  <th>Cooking Method</th>
                  <th>Rating</th>
                  <th>Favorite</th>
                </tr>
              </thead>
              <tbody>
                {chefrecipe.recipe_details.map((data) => (
                  <tr key={data.id}>
                    <th>{data.id}</th>
                    <td>{data.recipe_name}</td>
                    <td>{data.ingredients}</td>
                    <td>{data.method}</td>
                    <td></td>
                    <td>
                      <button
                        onClick={toggleFavorite}
                        disabled={isButtonDisabled}
                        className={isFavorite ? "favorite" : "not-favorite"}
                      >
                        {isFavorite ? "Disabled" : "Favorite"}
                      </button>
                      <ToastContainer />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
