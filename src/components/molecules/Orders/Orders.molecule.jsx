import React from "react";
import OrderTable from "../../organism/RecentOrders/OrdersTable.organism";
import { dummyData } from "../../organism/RecentOrders/dummy";

function Orders() {
  return <OrderTable newData={dummyData} />;
}

export default Orders;
