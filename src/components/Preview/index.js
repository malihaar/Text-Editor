import { PropTypes } from 'prop-types'

import "./index.scss";

function Preview({value}) {
    Preview.propTypes = {
        value: PropTypes.string.isRequired
    }

    return (
      <div className="preview-container">
        <div className="phone-container">
          <div className="value-container">
              <h6>Text</h6>
            <div className="preview-text" dangerouslySetInnerHTML={{__html:value}}/>
          </div>
          <img src="/phone.png" alt="" />
        </div>
      </div>
    );
}

export default Preview;
