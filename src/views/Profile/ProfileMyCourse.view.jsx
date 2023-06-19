import React from "react";
import ListCourse from "../../components/organism/ListCourse/ListCourse.organism";
import useSWR from "swr";
import { getRequest } from "../../utils/fetcherMethod";

function ProfileMyCourse() {
  const { data, isLoading } = useSWR(
    "/api/v1/admin/courses?size=10&page=1",
    getRequest
  );

  return (
    <div>
      <h1 className="text-lg py-4">My Course</h1>
      <div className="h-[32rem] mx-2 overflow-y-auto">
        {isLoading ? <p>Loading Course...</p> : <ListCourse allCourse={data} />}
      </div>
    </div>
  );
}

export default ProfileMyCourse;
