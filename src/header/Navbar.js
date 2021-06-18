import React from "react";
import head2 from "../images/head2.jpeg"

const Navbar = () => {
  return (
    <div className="flex justify-between  pt-4 px-40">
      <h1 className="text-2xl font-semibold">BBIRDSY.XYZ 线上看</h1>

      <div className="relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-800 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" class="absolute right-0 top-0 mt-2 mr-4">尋</button>
      </div>

      <div className="flex  ">
        <h1 className="text-2xl px-4">List</h1>
        <h1 className="text-2xl px-4">更新</h1>
        <h1 className="text-2xl pr-8 pl-4">留言版</h1>
        <img className='rounded-full h-8 w-8' src={head2} alt="" />
      </div>
    </div>
  );
};



export default Navbar;
