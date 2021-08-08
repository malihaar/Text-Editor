import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Mobile from "./components/Mobile";
import {useState} from "react";
import {Row, Col} from "react-bootstrap";
import "./App.scss"

function App() {
    const [value, setValue] = useState();

    const handleChange = (e) => {

        setValue(e.editor.getData());
    };

    return (
      <div className="App">
        <header className="App-header">
          <div className="d-none d-md-block">
            <Row>
              <Col lg={6} md={6}>
                <Editor handleChange={handleChange} />
              </Col>
              <Col lg={5} md={{spam:5,offset:1}}>
                <Preview value={value} />
              </Col>
            </Row>
          </div>
          <div
            className="d-sm-block d-md-none background-mobile"        >         
              <Mobile value={value} />
          </div>
        </header>
      </div>
    );
}

export default App;
