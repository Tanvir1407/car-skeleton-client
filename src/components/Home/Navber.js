import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navber = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const menuItens = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">product </Link>
      </li>
      <li>
        <Link to="/purchase">Purchase</Link>
      </li>
      {user && (
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/blogs">Blogs </Link>
      </li>
      <li>
        <Link to="/portfolio">My Portfolio</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link className="font-bold" onClick={logout} to="/login">
              Sign Out
            </Link>
          </li>
          <li>
            <Link className="bg-green-400 text-white font-bold" to="/portfolio">
              {user.displayName}{" "}
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link className="bg-red-400 text-white font-bold" to="/login">
            Log In
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItens}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Car Skeleton </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItens}</ul>
        </div>
        <div className="navbar-end">
          <label
            tabIndex="1"
            for="myDashboad"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navber;
