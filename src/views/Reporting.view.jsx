import React from "react";
import AllCourse from "../components/molecules/AllCourse/AllCourse.molecule";
import { listAllCourse } from "../components/organism/ListCourse/dummyData";
import AllCourseCard from "../components/organism/AllCourseCard/AllCourseCard.organism";
import UserListCard from "../components/organism/UserListCard/UserListCard.organism";
import { Link } from "react-router-dom";

function ReportingView() {
  return (
    <div className="">
      <h1 className="text-xl">My Course</h1>
      <div className="mr-4 my-4  h-[32rem] overflow-y-auto">
        {listAllCourse.map((list) => (
          <Link to={`/reporting/${list.courseName}`}>
            <UserListCard key={list.id} {...list} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ReportingView;
