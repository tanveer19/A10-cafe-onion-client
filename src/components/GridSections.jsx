import React from "react";

const GridSections = () => {
  return (
    <div>
      <h4 className="text-5xl text-center m-6"> Our Foods </h4>
      <div class="grid grid-cols-3 gap-4 w-1/2 mx-auto">
        <div class="flex justify-center items-center">
          <img src="/img/menu/menu-item-1.png" alt="" />
        </div>
        <div class="flex justify-center items-center">
          <img src="/img/menu/menu-item-2.png" alt="" />
        </div>
        <div class="flex justify-center items-center">
          <img src="/img/menu/menu-item-3.png" alt="" />
        </div>
        <div class="col-span-2 flex justify-center items-center">
          <img src="/img/menu/menu-item-4.png" alt="" />
        </div>
        <div class="flex justify-center items-center">
          <img src="/img/menu/menu-item-5.png" alt="" />
        </div>
        <div class="flex justify-center items-center">
          <img src="/img/menu/menu-item-6.png" alt="" />
        </div>
        <div class="col-span-2 flex justify-center items-center">
          <img src="/img/menu/menu-item-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GridSections;
