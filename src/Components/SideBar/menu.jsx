import { NavLink, useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation();
  return (
    <nav className="px-4 py-24 flex items-center">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/home"}
            activeStyle="bg-active"
            className={`h-20 flex items-center text-lg font-semibold text-link hover:text-white px-6 rounded-md gap-x-4 mb-8 ${
              location.pathname === "/home" ? "bg-active text-white" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Search"}
            activeClassName="bg-active"
            className={`h-20 flex items-center text-lg font-semibold text-link hover:text-white px-6 rounded-md gap-x-4 mb-8 ${
              location.pathname === "/Search" ? "bg-active text-white" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Busqueda
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Collection"}
            activeClassName="bg-blue"
            className={`h-20 flex items-center text- font-semibold text-link hover:text-white px-6 py-8 rounded-md gap-x-4 mb-8 ${
              location.pathname === "/Collection" ? "bg-active text-white" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
              />
            </svg>
            Biblioteca
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
