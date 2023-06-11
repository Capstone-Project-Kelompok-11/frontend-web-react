import React from "react";
import useSWR from "swr";
import { getRequest } from "../../utils/fetcherMethod";
import { transformDate } from "../../utils/helperMethod";
import FavoriteCourse from "../../components/organism/FavoriteCourse/FavoriteCourse.organism";
import HeaderDashboard from "../../components/organism/HeaderDashboard/HeaderDashboard.organism";
import OrdersTable from "../../components/organism/RecentOrders/OrdersTable.organism";

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
