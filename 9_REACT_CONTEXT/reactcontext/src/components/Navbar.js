import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/Products">Products</NavLink>
    </div>
  );
};

export default Navbar;
