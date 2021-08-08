import React from 'react'
import { PropTypes } from "prop-types";
import "./index.scss";

function Title({text, className, handleClick, children}) {
    
    Title.propTypes = {
      text: PropTypes.string.isRequired,
      handleClick : PropTypes.func
    }

    return (
      <div className={`title-container ${className}`} onClick={()=> {handleClick()}}>
        <h6>{text}</h6>
        {children}
      </div>
    );
}

export default Title;