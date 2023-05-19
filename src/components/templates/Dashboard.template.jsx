import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../organism/Navbar/NavigationBar.organism";
import SideBar from "../organism/Sidebar/SideBar.organism";

function DashboardTemplate() {
  return (
    <>
      <NavigationBar />
      <SideBar />
      <div className="relative pl-80">
        <Outlet />
      </div>
    </>
  );
}

export default DashboardTemplate;
