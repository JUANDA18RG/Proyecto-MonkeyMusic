import { Menu } from "@headlessui/react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function User() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.logout();
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  let displayName = "";
  let photoURL = "";

  if (auth.user) {
    displayName = auth.user.displayName;
    photoURL = auth.user.photoURL;
  } else {
    displayName = "Usuario";
    photoURL = "https://www.flaticon.es/svg/static/icons/svg/848/848043.svg";
  }

  return (
    <Menu as="nav" className="relative z-20">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex h-8 items-center rounded-3xl bg-white
            pr-2 hover:scale-105 transform transition duration-500 ease-in-out`}
          >
            <img
              src={photoURL}
              alt="avatar"
              className={`w-8 h-8 rounded-full m-2 p-1 mr-1`}
            />
            <span className="text-black m-2 font-semibold">{displayName}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-4 h-4 text-black mr-2 mt-1 transition duration-300 ease-in-out${
                open === true &&
                "transform rotate-180 transition duration-300 ease-in-out"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 bg-active rounded-md translate-y-4"
            }
          >
            <Menu.Item className="hover:bg-black rounded-md transition duration-300 ease-in-out">
              {({ active }) => (
                <Link
                  className={`h-10 flex items-center justify-between px-2 text-sm rounded-md${
                    active && "bg-white text-white"
                  }`}
                  href="/"
                >
                  Perfil
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 m-1 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item className="hover:bg-black rounded-md transition duration-300 ease-in-out">
              {({ active }) => (
                <Link
                  className={`h-10 flex items-center justify-between px-2 text-sm rounded-md${
                    active && "bg-white text-white"
                  }`}
                  href="/"
                >
                  Ajustes
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 m-1 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item className="hover:bg-black rounded-md transition duration-300 ease-in-out">
              {({ active }) => (
                <div className="flex justify-between">
                  <button
                    className={`h-10 flex items-center px-2 text-sm rounded-md ${active}`}
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </button>

                  <div className="flex items-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 m-1 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
