import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const onLogout = () => {
    navigate("/login", { replace: true });
    logout();
  };
  const { name } = user;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="nav-link " to="/">
        Home
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end p-2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link ">{name}</span>
          <NavLink
            className="nav-item nav-link "
            to="/login"
            onClick={onLogout}
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
