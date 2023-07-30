import React from 'react'
import "./component.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function bio() {
  return (
    <div>
      <div className="container-fluid">
      <div className="row " style={{marginTop:"150px"}}>
        <div className="image col-md-4 col-sm-12 offset-md-2" ><img className="img-fluid img-thumbnail" src={require("../images/myself.jpg")} alt="" />
        <div className="d-grid col-5 mx-auto mt-3">
        <button type="button" className="btn btn-primary"><a href="https://drive.google.com/file/d/1UKX0ZQzvRiN95JU6jVYQ61sEzFTSkQg8/view?usp=sharing" className='resume' target="_blank" rel="noreferrer">Download Resume</a></button>
        </div>
        </div>
        <div className="bio col-md-3 col-sm-12  offset-md-1 align-items-center"><h1 classNameName='text-center'>My Bio</h1><br/><p>Hello everyone!!!!Myself <b>Mrinal Kangsa Banik</b>.I am currently pursuing my Bachelors of Technology in <b>Computer Science and Engineering(4th Sem)</b> from <b>National Institute of Technology,Silchar</b>.</p><br/>I am passionate coder.I have solved <b>100+ problems on LeetCode</b>.I am a <b>Web Developer</b> too.I use <b>MERN stack</b>.I have made many projects too.I am an ML enthusiast and aspiring to become a <b>Data Scientist</b>
        <h3>Languages I know:</h3><br/>
        <ul className=''>
          <li style={{fontSize:"30px",fontWeight:"bold"}}>C <img style={{height:"40px",width:"40px"}}src={require("../images/c.png")} alt="No_Image"/></li>
          <li style={{fontSize:"30px",fontWeight:"bold"}}>C++  <img style={{height:"40px",width:"40px"}}src={require("../images/C++.png")} alt="No_Image"/></li>
          <li style={{fontSize:"30px",fontWeight:"bold"}}>Python  <img style={{height:"40px",width:"40px"}}src={require("../images/pytohn.jpg")} alt="No_Image"/></li>
          <li style={{fontSize:"30px",fontWeight:"bold"}}>HTML  <img style={{height:"40px",width:"40px"}}src={require("../images/html.png")} alt="No_Image"/></li>
          <li style={{fontSize:"30px",fontWeight:"bold"}}>CSS  <img style={{height:"40px",width:"40px"}}src={require("../images/css.png")} alt="No_Image"/></li>
          <li style={{fontSize:"30px",fontWeight:"bold"}}>Javascript  <img style={{height:"40px",width:"40px"}}src={require("../images/js.png")} alt="No_Image"/></li>
        </ul>
        </div>
        </div>
      </div>
    </div>
  )
}
