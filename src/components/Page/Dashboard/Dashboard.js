import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  return (
    <div class="drawer drawer-mobile">
      <input id="myDashboad" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h1 className="text-center  py-4 font-bold text-3xl bg-slate-900 text-white">
          Hi {user.displayName}, Welcome to your Dashboard{" "}
        </h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="myDashboad" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
          <li>
            <Link to="/dashboard">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Review </Link>
          </li>
          <li>
            <Link to="/dashboard/myprofile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/allorder">Manage all Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addproduct">Add a Product</Link>
          </li>
          <li>
            <Link to="/dashboard/manageProduct">Mange Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
