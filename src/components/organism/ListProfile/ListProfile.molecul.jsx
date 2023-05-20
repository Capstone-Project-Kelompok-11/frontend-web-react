import React from "react";
import OrderDash from "../../molecules/OrderDash/OrderDash.molecule";
import IncomeDash from "../../molecules/IncomeDash/IncomeDash.molecul";

import ProductSoldDash from "../../molecules/ProductSold/ProductSoldDash.molecul";
import StudentProfileDash from "../../molecules/StudentProfileDash/StudentProfileDash.molecul";

function HeaderProfile() {
  return (
    <div className="grid grid-cols-4">
      <OrderDash newOrder={245} />
      <IncomeDash newIncome={6} />
      <StudentProfileDash newStudent={52} />
      <ProductSoldDash newProductSold={57} />
    </div>
  );
}

export default HeaderProfile;
