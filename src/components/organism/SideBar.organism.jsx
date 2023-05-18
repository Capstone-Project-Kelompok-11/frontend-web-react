import { useLocation } from "react-router-dom";
import DashboardIcon from "../atoms/Icons/DashboardIcon.atom";
import CourseIcon from "../atoms/Icons/CourseIcon.atom";
import ReportingIcon from "../atoms/Icons/ReportingIcon.atom";

function SideBar() {
  const location = useLocation();
  const nav = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "Course",
      href: "/course",
      icon: <CourseIcon />,
    },
    {
      name: "Reporting",
      href: "/reporting",
      icon: <ReportingIcon />,
    },
  ];
  return (
    <div className="absolute block top-0 bg-custom-blue w-72 h-screen ">
      <div className="text-center items-center flex-row ">
        {nav.map((item) => (
          <a href={item.href}>
            <div
              key={item.name}
              className={`inline-flex relative px-4 w-64 mx-8 top-40 my-2 py-2 ${
                item.href === location.pathname ? "bg-white font-bold" : ""
              } `}
            >
              <div>{item.icon}</div>
              <h1 className="mx-4 text-xl">{item.name}</h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
