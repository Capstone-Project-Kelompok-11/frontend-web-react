import React from "react";

function MyCourse() {
  return (
    <div className="bg-blue-50 p-6 rounded-xl ">
      <h1 className="font-bold text-base">My Course</h1>
      <div className="border border-black rounded-xl text-xs p-5">
      <div className=" flex justify-between   ">
        <p>UI Design</p>
        <p className="font-bold">Rp 300.000</p>
      </div><div className="flex gap-3 ">
          <p>5 Material</p>
          <p>3 Course</p>
        </div>
      </div>
     
    </div>
  );
}

export default MyCourse;
