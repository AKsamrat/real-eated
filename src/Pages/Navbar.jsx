import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // console.log(user);
  const handleSignout = () => {
    logOut().then(toast('successfully Logged Out')).catch();
  };

  const navlink = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/updateProfile'}>Update Profile </NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}> Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 mt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <Link to={'/'} className=" text-xl">
            <img className="w-64" src="/logo1.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end flex items-center">
            <div
              className="tooltip   rounded-full mr-2"
              data-tip={user?.displayName}
            >
              {user && (
                <img
                  className="w-12 rounded-full h-12 "
                  alt="profile pic"
                  src={user?.photoURL}
                />
              )}
            </div>
            {/* <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div
                className="w-10 rounded-full tooltip"
                // data-tooltip-id="my-tooltip"
                // data-tooltip-content={user?.displayName}
                // data-tooltip-place="top"
                data-tip={user?.displayName}
              ></div>
            </div> */}

            {user ? (
              <Link
                className="btn bg-[#AD8B00] text-white"
                onClick={handleSignout}
              >
                SignOut
              </Link>
            ) : (
              <Link
                to={'/login'}
                onClick=""
                className="btn bg-[#AD8B00] text-white"
              >
                LogIn
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
