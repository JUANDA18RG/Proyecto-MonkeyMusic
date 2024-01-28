import { Range, getTrackBackground } from "react-range";
import PropTypes from "prop-types";

export default function CustomRange({ value, step, min, max, onChange }) {
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max || 1}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          // eslint-disable-next-line react/prop-types
          onMouseDown={props.onMouseDown}
          // eslint-disable-next-line react/prop-types
          onTouchStart={props.onTouchStart}
          className="w-full h-7 flex group"
          // eslint-disable-next-line react/prop-types
          style={props.style}
        >
          <div
            // eslint-disable-next-line react/prop-types
            ref={props.ref}
            className="h-1 w-full rounded-md self-center"
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: [value],
                colors: ["#1db954", "#535353"],
                min,
                max,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className={`h-3 w-3 rounded-full bg-white ${
            !isDragged ? "opacity-0" : ""
          } group-hover:opacity-100 transition-opacity duration-300`}
          style={{
            // eslint-disable-next-line react/prop-types
            ...props.style,
            boxShadow: "0px 2px 6px #AAA",
          }}
        />
      )}
    />
  );
}

CustomRange.propTypes = {
  value: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  renderTrack: PropTypes.func,
  renderThumb: PropTypes.func,
};
