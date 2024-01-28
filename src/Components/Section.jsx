import PropTypes from "prop-types";

import SongItems from "./SongItems";

export default function Section({ title, Canciones }) {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h3 className="text-4xl text-white font-semibold tracking-tight">
          {title}
        </h3>
      </header>
      <div className="grid grid-cols-5 mt-2 gap-x-6">
        {Canciones.map((Cancion) => (
          <SongItems Cancion={Cancion} key={Cancion.id} />
        ))}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  Canciones: PropTypes.array.isRequired,
};
