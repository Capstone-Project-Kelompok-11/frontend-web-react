import React from "react";
import IncomeIcon from "../../atoms/Icons/IncomeIcon.atom";

function IncomeDash({ newIncome }) {
  return (
    <div className="inline-flex flex-col p-2 mx-3 font-bold rounded-xl text-white w-56 bg-blue-700 ">
      <div className="flex px-2 my-2 justify-between">
        <h1 className="pb-4 text-2xl">Income</h1>
        <div className=" rounded-full h-8 my-2 p-1 bg-white bg-opacity-30"><IncomeIcon /></div>
      </div>
      <p className="text-3xl px-4 py-2">Rp {newIncome} Juta</p>
    </div>
  );
}

export default IncomeDash;
