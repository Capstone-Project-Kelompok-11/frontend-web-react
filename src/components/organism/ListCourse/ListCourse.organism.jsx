import React from "react";
import { listAllCourse } from "./dummyData";
import ListAllCourse from "../../molecules/ListAllCourse/ListAllCourse.molecul";

function ListCourse() {
  return (
    <>
      {listAllCourse.map((list) => (
        <ListAllCourse key={list.id} course={list} />
      ))}
    </>
  );
}

export default ListCourse;
