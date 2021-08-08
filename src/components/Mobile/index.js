import { PropTypes } from "prop-types";

import "./index.scss";

function Mobile({ value }) {
  Mobile.propTypes = {
    value: PropTypes.string.isRequired,
  };

  return (
    <div className="preview-container">
      <div className="rectangle">
        <div className="value-container">
          <h6>Text</h6>
          <div
            className="preview-text"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      </div>
    </div>
  );
}

export default Mobile;
