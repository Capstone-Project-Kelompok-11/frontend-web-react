import { useLocation } from "react-router-dom";
import DashboardIcon from "../atoms/Icons/DashboardIcon";
import CourseIcon from "../atoms/Icons/CourseIcon";
import ReportingIcon from "../atoms/Icons/ReportingIcon";

function SideBar() {
  const location = useLocation();
  const nav = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />
    },
    {
      name: "Course",
      href: "/course",
      icon: <CourseIcon />
    },
    {
      name: "Reporting",
      href: "/reporting",
      icon: <ReportingIcon />
    },
  ];
  return (
   
      <div className="absolute top-0 bg-[#3D8BFD] w-72 h-screen ">
        <div className="relative items-center flex-row gap-4">
          {nav.map((v, i) => (
            <div
              key={i}
              className={`inline-flex relative  w-64 mx-8 top-40 py-2 px-4 ${
                v.href === location.pathname ? "bg-white font-bold" : ""
              } `}
            >
              <div className="px-4">
              {v.icon}
              </div>
             
              <h1>
                <a href={v.href}>{v.name}</a>
              </h1>
              
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default SideBar;
