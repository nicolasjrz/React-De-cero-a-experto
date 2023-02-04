import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login", { replace: true });
  };

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
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end p-2">
        <ul className="navbar-nav ml-auto">
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
