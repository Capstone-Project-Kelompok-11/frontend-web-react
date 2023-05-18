import React from "react";
import OrderTable from "../../organism/Table/OrdersTable.organism";
import { dummyData } from "../../organism/Table/dummy";

function Orders() {
	return <OrderTable newData={dummyData} />;
}

export default Orders;
