import React from "react";
import AllCourse from "../../components/organism/AllCourse/AllCourse.organism";
import { getRequest } from "../../utils/fetcherMethod";
import useSWR from "swr";

function CourseView() {
  const { data, isLoading } = useSWR("/api/v1/admin/courses?size=8&page=1", getRequest, {
    refreshInterval: 3000,
  });
  return isLoading ? <p>Loading Data..</p> :  <AllCourse {...data} />;
}

export default CourseView;
