import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="myDashboad" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h1>This is DashBoard </h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="myDashboad" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Review </Link>
          </li>
          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
