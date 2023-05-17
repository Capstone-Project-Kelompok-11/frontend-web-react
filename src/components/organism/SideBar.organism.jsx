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
      <div className="text-center items-center flex-row gap-4">
        {nav.map((item) => (
          <div
            key={item.name}
            className={`inline-flex relative w-64 mx-8 top-40 my-2 py-2 ${
              item.href === location.pathname ? "bg-white font-bold" : ""
            } `}
          >
            <div className="px-4">{item.icon}</div>
            <h1>
              <a className="mx-4 text-xl" href={item.href}>{item.name}</a>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
