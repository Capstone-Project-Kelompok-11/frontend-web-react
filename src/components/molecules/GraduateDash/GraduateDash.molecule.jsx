import React from "react";
import GraduateIconDash from "../../atoms/Icons/GraduateIconDash.atom";

function GraduateDash({GraduateStatus}) {
  return (
    <div className="flex items-center ps-12 py-6">
      <div className="bg-yellow-300 p-3 rounded-xl px-4">
        <GraduateIconDash />
      </div>
      <div className="flex flex-col ps-5">
        <p>Graduate</p>
        <h1 className="font-bold text-3xl">{GraduateStatus}</h1>
      </div>
    </div>
  );
}

export default GraduateDash;
