import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    return ( 
      <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li className="hover:border border-[#23BE0A] p-2 rounded-xl hover:text-[#23BE0A] "><NavLink to={"/"}>Home</NavLink></li>
      <li className="hover:border border-[#23BE0A] p-2 rounded-xl hover:text-[#23BE0A] "><NavLink to={"/DashBoard"}>Listed Books </NavLink></li>
      <li className="hover:border border-[#23BE0A] p-2 rounded-xl hover:text-[#23BE0A] "><NavLink to={"/DashBoard"}>Pages to read  </NavLink></li>
      </ul>
      
    </div>
    <a className="btn btn-ghost text-xl">Book </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-2 ">
      <li className="hover:border border-[#23BE0A] p-2 rounded-xl hover:text-[#23BE0A] "><NavLink to={"/"}>Home</NavLink></li>
      <li className="hover:border border-[#23BE0A] p-2 rounded-xl hover:text-[#23BE0A] "><NavLink to={"/DashBoard"}>Listed Books </NavLink></li>
      <li className="hover:border border-[#23BE0A] p-2 rounded-xl hover:text-[#23BE0A] "><NavLink to={"/DashBoard"}>Pages to read  </NavLink></li>
     </ul>
  </div>
  <div className="navbar-end gap-2 ">
    <a className="btn">Sign In </a>
    <a className="btn">Sign Up </a>
  </div>
</div>


</div>




    );
};

export default Navbar;