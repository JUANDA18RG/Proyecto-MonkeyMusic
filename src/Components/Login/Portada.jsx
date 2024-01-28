import { Link } from "react-router-dom";

export default function Portada() {
  return (
    <div className="relative flex items-center justify-center h-screen flex-col">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="Banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full h-full bg-gradient-to-b from-active to-gray-400 opacity-70"></div>
      <div className="relative z-10 flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center shadow-sm p-4 bg-gradient-to-b from-black to-active text-white rounded-full uppercase">
          <div className="mr-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.5 17L6 12l1.5-1.5L9.5 14l6.5-6.5L18 8l-8.5 9z"
              />
            </svg>
          </div>
          No 1 in music in the world
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-1 mb-8 bg-white rounded-full w-40 h-40 flex items-center justify-center">
            <img
              src="Logo.png"
              alt="Logo"
              className="w-36 rounded-full px-1 py-1 bg-white border-2 border-black"
            />
          </div>
          <h1 className="text-6xl font-bold text-center items-center mb-8">
            MonkeyMusic<span className="text-xl">&reg;</span>
          </h1>
        </div>
        <div className=" text-sm md:text-xl text-gray-900 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
          Monkey Music is a music streaming service developed by Monkey Music AB
          in Sweden and is available in 79 countries and territories
        </div>
        <button className=" m-8 text-sm md:text-xl text-white bg-black px-4 py-2 rounded-md shadow-sm hover:bg-active transition duration-300">
          <Link to={"/Singin"}>Get Monkey Music for free</Link>
        </button>
      </div>
    </div>
  );
}
