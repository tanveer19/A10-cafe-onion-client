import React from "react";

const Card = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-3">Blog</h1>

      <div className="flex justify-center my-8">
        <div className="card w-1/2 glass">
          <figure>
            <img src="/img/stats.jpg" alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack 101</h2>
            <p>How to cook rice?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
