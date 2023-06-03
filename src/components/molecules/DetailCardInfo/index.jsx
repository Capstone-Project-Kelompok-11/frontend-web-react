import React from "react";
import { getSimpleName } from "../../../utils/helperMethod";

function DetailCardInfo({ title, content, fromCourse }) {
  const needAdjustment = ["Responsible", "Name"].includes(title);
  const finalContent = needAdjustment ? getSimpleName(content, title) : content;

  return (
    <section className="flex gap-2 border-b-2 px-2 pb-3 border-gray-600">
      <p className={`${fromCourse ? "w-24" : "w-14"} text-sm`}>{title}</p>
      <p>:</p>
      <p className="text-sm">{finalContent}</p>
    </section>
  );
}

export default DetailCardInfo;
