import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../stores/player";
import PropTypes from "prop-types";

export default function SongItems({ Cancion }) {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);

  const updateCurrent = () => {
    dispatch(setCurrent(Cancion));
  };

  return (
    <NavLink
      key={Cancion.id}
      className={
        "bg-footer p-4 rounded-md m-3 hover:bg-active transition duration-300 ease-in-out group"
      }
    >
      <div className="pt-[100%] relative mb-5">
        <img
          src={Cancion.imagen}
          alt={Cancion.nombre}
          className={`rounded-lg absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-70 group-focus:opacity-70`}
        />
        <button
          onClick={updateCurrent}
          className="w-10 h-10 rounded-full absolute bottom-2 right-2 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
        >
          {current?.id === Cancion.id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-white "
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      <h6 className="line-clamp-1 text-center m-1 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
        {Cancion.nombre} - {Cancion.artista}
      </h6>
      <p className="line-clamp-1 text-sm text-center">
        <span className="text-gray-400">Album:</span>
        <span className="text-gray-100 ml-1"> {Cancion.album}</span>
      </p>
    </NavLink>
  );
}

SongItems.propTypes = {
  Cancion: PropTypes.object.isRequired,
};
