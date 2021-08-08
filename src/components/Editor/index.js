import {PropTypes} from "prop-types";
import {CKEditor} from "ckeditor4-react";
import Title from "../Title";
import Arrow from "../Arrow";
import Button from "../Button";
import {useState} from "react";
import {Collapse} from "react-bootstrap";
import "./index.scss";

function Editor({handleChange}) {
    const config = {
        width: "100%",
        height: 172,
    };

    Editor.propTypes = {
        handleChange: PropTypes.func.isRequired,
    };

    const [open, setOpen] = useState(true);
    const [direction, setDirection] = useState("up");

    const handleClick = () => {
        setOpen(!open)
        setDirection(open ? "down" : "up")
    }

    return (
        <div className="editor-container">
            <h3>Customisation</h3>
            <p>The text will reflect mobile view</p>
            <Title className="editor-title" text="Text" handleClick={handleClick}>
                <div className="title-arrow">
                    <Arrow direction={direction} color="black"/>
                </div>
            </Title>
            <Collapse in={open}>
                <div>
                    <CKEditor onChange={handleChange} config={config}/>
                </div>
            </Collapse>
            <Button content="Publish"/>
        </div>
    );
}

export default Editor;
