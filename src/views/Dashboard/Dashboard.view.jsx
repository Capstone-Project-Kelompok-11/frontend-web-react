import React from "react";
import FavoriteCourse from "../../components/organism/FavoriteCourse/FavoriteCourse.organism";
import HeaderDashboard from "../../components/organism/HeaderDashboard/HeaderDashboard.organism";
import OrdersTable from "../../components/organism/RecentOrders/OrdersTable.organism";
import { dummyData } from "../../components/organism/RecentOrders/dummy";

function DashboardView() {
  return (
    <section className="flex flex-col gap-6 me-8">
      <HeaderDashboard />

      <section className="flex gap-10 ">
        <OrdersTable newData={dummyData} />
        <FavoriteCourse />
      </section>
    </section>
  );
}

export default DashboardView;
