import { NavLink } from "react-router-dom";
import Logo from "./Logo";
function Navbar() {
  return (
    <nav className="flex items-center justify-between pl-32 pr-20 row-start-1 row-span-1 bg-white">
      <Logo />
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to={`/`}
            className={({ isActive }) =>
              ` ${isActive ? "active link" : "link"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`agents`}
            className={({ isActive }) =>
              ` ${isActive ? "active link" : "link"}`
            }
          >
            Agents
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`selling`}
            className={({ isActive }) => `${isActive ? "active link" : "link"}`}
          >
            Selling
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`buying`}
            className={({ isActive }) =>
              ` ${isActive ? "active link" : "link"}`
            }
          >
            Buying
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`listings`}
            className={({ isActive }) =>
              ` ${isActive ? "active link" : "link"}`
            }
          >
            Map
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`signIn`}
            className="hover:bg-violet-900 bg-violet-800 text-white font-semibold h-10 w-20 flex items-center justify-center rounded-3xl hover:scale-105"
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
