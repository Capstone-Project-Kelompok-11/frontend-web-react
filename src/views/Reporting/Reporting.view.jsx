import React from "react";

import { Link } from "react-router-dom";
import UserListCard from "../../components/organism/UserListCard/UserListCard.organism";
import { listAllCourse } from "../../components/organism/ListCourse/dummyData";
function ReportingView() {
  return (
    <div>
      <h1 className="text-xl">My Course</h1>
      <div className="mr-4 my-4 h-[32rem] overflow-y-auto">
        {listAllCourse.map((list) => (
          <Link key={list.id} to={`/reporting/${list.courseName}`}>
            <UserListCard  {...list} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ReportingView;
