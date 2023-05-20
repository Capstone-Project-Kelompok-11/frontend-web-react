import React from "react";

function InformationHeader({ title, num, image, isLast }) {
  return (
    <section
      className={`flex items-center justify-center py-6 ${
        !isLast && "border-r-2 border-gray-600"
      }`}
    >
      <img src={image} alt="new student" className="w-18 h-18" />

      <section className="flex flex-col ps-5">
        <p>{title}</p>
        <p className="font-bold text-3xl">{num}</p>
      </section>
    </section>
  );
}

export default InformationHeader;
