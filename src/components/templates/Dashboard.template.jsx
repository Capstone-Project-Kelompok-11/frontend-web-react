import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../organism/NavigationBar.organism";
import SideBar from "../organism/SideBar.organism";
import ProfileSideBar from "../organism/ProfileSideBar/ProfileSideBar.organism";

function DashboardTemplate() {
  const location = useLocation();
  return (
    <>
      <NavigationBar />
      {location.pathname === "/profile" ? <ProfileSideBar /> : <SideBar />}
      <div className="relative pl-80">
        <Outlet />
      </div>
    </>
  );
}

export default DashboardTemplate;
