import React from "react";
import { Link } from "react-router-dom";

function TodaysEventCard({ list }) {
  return (
    <>
      <div className="flex text-sm pr-3 py-2 ">
        <Link to="/dashboard" className="text-primary-50 ">
          -{list.hours}
        </Link>
        <p className="pl-2">{list.activity}</p>
      </div>
      <div className="text-xs px-12 text-gray-400">{list.hoursActivity}</div>
    </>
  );
}

export default TodaysEventCard;
