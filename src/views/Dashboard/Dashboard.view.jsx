import React from "react";
import useSWR from "swr";
import { getRequest } from "../../utils/fetcherMethod";
import { transformDate } from "../../utils/helperMethod";
import FavoriteCourse from "../../components/organism/FavoriteCourse/FavoriteCourse.organism";
import HeaderDashboard from "../../components/organism/HeaderDashboard/HeaderDashboard.organism";
import OrdersTable from "../../components/organism/RecentOrders/OrdersTable.organism";

function DashboardView() {
  const { data: dataStats } = useSWR("api/v1/admin/stats", getRequest);
  const { data: dataHistory } = useSWR(
    "api/v1/admin/checkout/history?size=8&page=1",
    getRequest
  );
  const { data: dataCourses } = useSWR(
    "api/v1/admin/courses?size=20&page=1",
    getRequest
  );

  const orderData = dataHistory?.data?.map((value) => {
    return {
      ...value.course,
      paid: value?.cancel ? value?.cancel : value?.paid,
      date: transformDate(value?.created_at),
    };
  });

  return (
    <section className="flex flex-col gap-6 me-8">
      <HeaderDashboard dataStats={dataStats} />

      <section className="flex gap-10 ">
        {orderData && <OrdersTable newData={orderData} />}
        <FavoriteCourse dataCourses={dataCourses} />
      </section>
    </section>
  );
}

export default DashboardView;
