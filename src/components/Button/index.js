import "./index.scss";
import { PropTypes } from "prop-types";
import Arrow from "../Arrow";


function Button({ content }) {
    Button.propTypes = {
      content: PropTypes.string.isRequired,
    };

    return (
      <div className="button-container">

            <h6>{content}</h6>

            <Arrow direction="right" color="white"/>

      </div>
    );
}

export default Button;