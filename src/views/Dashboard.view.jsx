import React from "react";
import Orders from "../components/molecules/Orders/Orders.molecule";
import FavoriteCourse from "../components/organism/FavoriteCourse/FavoriteCourse.organism";
import HeaderDashboard from "../components/organism/HeaderDashboard/HeaderDashboard.organism";

function DashboardView() {
  return (
    <div className="mt-8">
      <div className="flex flex-col gap-6 me-8 min-h-screen">
        <HeaderDashboard />
        <div className="flex gap-10 ">
          <Orders />
          <FavoriteCourse />
        </div>
      </div>
    </div>
  );
}

export default DashboardView;
