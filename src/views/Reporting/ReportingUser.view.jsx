import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import UserListCourseCard from "../../components/organism/UserListCourseCard/UserListCourseCard.organism";
import useSWR from "swr";
import useHTTP from "../../utils/hooks/useHTTP";

function ReportingUserView() {
  const { getRequest } = useHTTP();
  const { data, isLoading } = useSWR(
    "/api/v1/admin/who/courses/enrolled?size=20&page=1",
    getRequest
  );
  const { course_name } = useParams();
  const { state } = useLocation();
  const filteredData = data?.data?.find((user) => user.name === course_name);

  return (
    <div>
      <h1 className="py-4 text-xl">{course_name}</h1>
      <div className="grid grid-cols-2 p-1 mr-9 px-4 rounded-lg bg-light-blue/20 border">
        <p>Name</p>
        <p>Aktivitas</p>
      </div>
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        filteredData?.users?.map((user) => (
          <Link
            key={user.username}
            to={`/reporting/${course_name}/${user.name}`}
            state={{ user, ...state }}
          >
            <UserListCourseCard {...user} />
          </Link>
        ))
      )}
    </div>
  );
}

export default ReportingUserView;
