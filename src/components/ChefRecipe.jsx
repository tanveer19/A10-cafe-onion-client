import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipe = () => {
  const chefrecipe = useLoaderData();
  const { picture, name, bio, likes, recipes, exp } = chefrecipe;

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
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>
                    {chefrecipe.recipe_details.map((data) => (
                      <div>{data.recipe_name}</div>
                    ))}
                  </td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
