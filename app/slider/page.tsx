"use client";
import { useState } from "react";

const page = () => {
  const [value, setValue] = useState(0);
  const plays = [
    1000, 2000, 5000, 7500, 10000, 15000, 20000, 30000, 40000, 50000, 75000,
    100000, 150000, 200000, 250000,
  ];
  const NoPlays = `${value > 0 ? plays[value - 1] : 0}`;
  const PlaysPrice = `${value > 0 ? (plays[value - 1] / 1000) * 4.95 : 0}`;
  function handleChange(e: any) {
    setValue(e.target.value);
  }
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col  justify-center items-center">
      <div className="flex justify-between w-[280px]">
        <span className="font-[650]">{NoPlays}:Plays</span>
        <span className="text-[17px] font-[600]">${PlaysPrice}</span>
      </div>

      <input
        type="range"
        name="range"
        id="r"
        min="0"
        max={plays.length}
        value={value}
        className="w-[300px]  h-[10px] rounded-full  outline-none"
        onChange={handleChange}
      />
    </div>
  );
};

export default page;
