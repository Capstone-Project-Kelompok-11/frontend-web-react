import React from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../utils/fetcherMethod";
import UserListCard from "../../components/organism/UserListCard/UserListCard.organism";
import useSWR from "swr";

function ReportingView() {
  const { data: course, isLoading } = useSWR(
    "/api/v1/admin/courses?size=20&page=1",
    getRequest
  );

  return (
    <section className="me-8">
      <h1 className="text-xl">My Course</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="mr-4 my-4 h-[32rem] overflow-y-auto">
          {course?.data?.map((list) => (
            <Link
              key={list.id}
              to={`/reporting/${list.name}`}
              state={{ course_modules: list.modules, course_id: list.id }}
            >
              <UserListCard {...list} />
            </Link>
          ))}
        </section>
      )}
    </section>
  );
}

export default ReportingView;
