import React from "react";
import { useParams } from "react-router-dom";

const Chef = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Chef id: {id}</h2>
    </div>
  );
};

export default Chef;
