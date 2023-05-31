import React from "react";
import { Link, useParams } from "react-router-dom";
import { userListName } from "../../components/organism/UserListCourseCard/dummyData";
import UserListCourseCard from "../../components/organism/UserListCourseCard/UserListCourseCard.organism";

function ReportingUserView() {
  let { course_name } = useParams();
  return (
    <div>
      <h1 className="py-4 text-xl">{course_name}</h1>
      <div className="grid grid-cols-2 p-1 mr-9 px-4 rounded-lg bg-light-blue/20 border ">
        <p>Name</p>
        <p>Aktivitas</p>
      </div>
      {userListName.map((user) => (
        <Link key={user.id} to={`/reporting/${course_name}/${user.name}`}>
          <UserListCourseCard {...user} />
        </Link>
      ))}
    </div>
  );
}

export default ReportingUserView;
