import React from "react";
import useSWR from "swr";
import { getRequest } from "../../utils/fetcherMethod";
import { transformDate } from "../../utils/helperMethod";
import FavoriteCourse from "../../components/organism/FavoriteCourse/FavoriteCourse.organism";
import HeaderDashboard from "../../components/organism/HeaderDashboard/HeaderDashboard.organism";
import OrdersTable from "../../components/organism/RecentOrders/OrdersTable.organism";

function DashboardView() {
  const { data: dataStats, isLoading: dataStatsLoading } = useSWR(
    "api/v1/admin/stats",
    getRequest
  );
  const { data: dataHistory, isLoading: dataHistoryLoading } = useSWR(
    "api/v1/admin/checkout/history?size=8&page=1",
    getRequest
  );
  const { data: dataCourses, isLoading: dataCoursesLoading } = useSWR(
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
      {dataStatsLoading ? (
        <p>Loading stats...</p>
      ) : (
        <HeaderDashboard dataStats={dataStats} />
      )}

      <section className="flex gap-10 ">
        {dataHistoryLoading ? (
          <p>Loading recent orders...</p>
        ) : (
          orderData && <OrdersTable newData={orderData} />
        )}
        {dataCoursesLoading ? (
          <p>Loading favorite courses...</p>
        ) : (
          <FavoriteCourse dataCourses={dataCourses} />
        )}
      </section>
    </section>
  );
}

export default DashboardView;
