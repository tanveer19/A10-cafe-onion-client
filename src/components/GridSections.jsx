import React from "react";

const GridSections = () => {
  return (
    <div>
      <div class="grid grid-cols-3 gap-4">
        <div class="flex justify-center items-center">01</div>
        <div class="flex justify-center items-center">02</div>
        <div class="flex justify-center items-center">03</div>
        <div class="col-span-2 flex justify-center items-center">04</div>
        <div class="flex justify-center items-center">05</div>
        <div class="flex justify-center items-center">06</div>
        <div class="col-span-2 flex justify-center items-center">07</div>
      </div>
    </div>
  );
};

export default GridSections;
