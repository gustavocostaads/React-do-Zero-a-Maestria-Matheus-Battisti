import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/first">First</NavLink>
      <NavLink to="/second">Second</NavLink>
      <NavLink to="/third">Third</NavLink>
    </div>
  );
};

export default Navbar;
