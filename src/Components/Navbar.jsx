import User from "./Navbar/User";

export default function Navbar() {
  //funcion para devolverse en la pagina
  const goBack = () => {
    window.history.back();
  };

  //funcion para ir a la pagina siguiente
  const goNext = () => {
    window.history.forward();
  };

  return (
    <nav className="h-24 flex items-center justify-between px-8">
      <div className="flex items-center">
        <button
          onClick={() => goBack()}
          className="rounded-full bg-black m-2 p-2 hover:scale-110 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 m-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={() => goNext()}
          className="rounded-full bg-black m-2 p-2 hover:scale-110 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 m-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center">
        <User />
      </div>
    </nav>
  );
}
