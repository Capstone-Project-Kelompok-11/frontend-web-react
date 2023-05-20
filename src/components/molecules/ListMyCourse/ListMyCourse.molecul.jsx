import React from 'react'

function ListMyCourse({course}) {
  return (
   <div className="border border-black rounded-xl text-xs px-7 py-1 my-2">
    <div className=" flex justify-between   ">
      <p>{course.courseName}</p>
      <p className="font-bold text-base ">Rp {course.coursePrice}</p>
    </div>
    <div className="flex gap-3 opacity-60">
      <p>{course.totalMaterial} Material</p>
      <p>{course.totalCourse} Course</p>
    </div>
  </div>
  )
}

export default ListMyCourse