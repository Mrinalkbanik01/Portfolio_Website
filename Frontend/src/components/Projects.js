import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./component.css"
export default function Projects()
{
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-5 text-center">
          <div className="col-sm-12">
            <h1>MY PROJECTS</h1>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
            <div className="col-md-5 col-sm-12">
                <img className="img-fluid img-thumbnail" src={require("../images/project1.png")} alt="Nhi hai"/>
            </div>
            <div className="col-md-5 col-sm-12">
                <img className="img-fluid img-thumbnail" src={require("../images/project2.jpg")} alt="Nhi hai"/>
            </div>
        </div>
        <div className="row mt-5">
        <div className="col-md-6 col-sm-12 offset-md-3">
                <img className="img-fluid img-thumbnail" src={require("../images/project3.jpg")} alt="Nhi hai"/>            
        </div>
        </div>
      </div>
    </div>
  )
}
