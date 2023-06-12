import React from "react";
import { Link } from "react-router-dom";
import UserListCard from "../../components/organism/UserListCard/UserListCard.organism";
import { getRequest } from "../../utils/fetcherMethod";
import  useSWR  from "swr";

function ReportingView() {
  const { data: course, isLoading: courseLoading } = useSWR(
    "/api/v1/admin/courses?size=20&page=1",
    getRequest
  );
  return (
    <div>
      <h1 className="text-xl">My Course</h1>
      <div className="mr-4 my-4 h-[32rem] overflow-y-auto">
        {course?.data?.map((list) => (
          <Link key={list.id} to={`/reporting/${list.name}`}>
            <UserListCard {...list} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ReportingView;
