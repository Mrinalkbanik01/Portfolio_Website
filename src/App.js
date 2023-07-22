import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Bio from "./components/bio";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Forms from "./components/Forms";
function App() {
  return (
    <div className="website">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row navbar pt-2">
          <div className="col-md-2">
            <img
              src={require("../src/images/MKB.png")}
              alt="No_image"
              className="mkb"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div className="col-md-2">
            <button className="but">
              <a href="#Bio">Bio</a>
            </button>
          </div>
          <div className="col-md-2">
            <button className="but">
              <a href="#Projects">Projects</a>
            </button>
          </div>
          <div className="col-md-2">
            <button className="but">
              <a href="#Services">Services</a>
            </button>
          </div>
          <div className="col-md-2">
            <button className="but">
              <a href="#Forms">Forms</a>
            </button>
          </div>
          {/* <div className="col-md-2">
            <button className="but">
              <a href="#">Button</a>
            </button>
          </div> */}
        </div>
      </div>
      <div id="Bio">
        <Bio />
      </div>
      <div id="Projects">
        {" "}
        <Projects />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="Forms">
        <Forms />
      </div>
    </div>
  );
}

export default App;
