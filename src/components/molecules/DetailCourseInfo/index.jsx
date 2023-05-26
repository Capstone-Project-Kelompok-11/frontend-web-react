import React from "react";

function DetailCourseInfo({ title, content }) {
  return (
    <section className="flex gap-2 border-b-2 px-2 pb-3 border-gray-600">
      <p className="w-1/2 text-sm">{title}</p>
      <p className="text-sm">: {content}</p>
    </section>
  );
}

export default DetailCourseInfo;
