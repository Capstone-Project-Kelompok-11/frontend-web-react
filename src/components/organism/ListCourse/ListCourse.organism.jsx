import React from "react";
import { listAllCourse } from "./dummyData";
import ListAllCourse from "../../molecules/ListAllCourse/ListAllCourse.molecul";

function ListCourse() {
  return (
    <div>
      {listAllCourse.map((list) => (
        <ListAllCourse key={list.id} course={list} />
      ))}
    </div>
  );
}

export default ListCourse;
