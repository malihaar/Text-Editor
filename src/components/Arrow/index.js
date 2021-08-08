import "./index.scss";
import { PropTypes } from "prop-types";

function Arrow({ direction, color }) {
  Arrow.propTypes = {
    direction: PropTypes.oneOf(["left", "right", "up", "down"]).isRequired,
    color: PropTypes.oneOf(["black", "white"]).isRequired
  };

  const style = {
    border: `solid ${color}`,
    "borderWidth": "0 3px 3px 0"
  }

  return (
    <div>
      <div style={ style } className={`arrow-container ${direction}`} />
    </div>
  );
}

export default Arrow;
