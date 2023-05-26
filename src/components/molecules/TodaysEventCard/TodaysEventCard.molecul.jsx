import React from "react";
import { Link } from "react-router-dom";

function TodaysEventCard({ list }) {
  return (
    <>
      <div className="flex text-sm py-2 ">
        <Link to="/dashboard" className="text-primary-50">
          -{list.hours}
        </Link>
        <p className="px-4">{list.activity}</p>
      </div>
      <div className="text-xs pl-14 text-gray-400">{list.hoursActivity}</div>
    </>
  );
}

export default TodaysEventCard;
