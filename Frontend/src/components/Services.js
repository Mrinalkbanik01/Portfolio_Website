import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./component.css"
export default function Services() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row text-center">
            <div className="col-sm-12 mt-5"><h1>Domains of Intrest</h1></div>
        </div>
        <div className="row justify-content-center " style={{color:"rgb(249,67,124)"}}>
            <div className="col-md-3 col-sm-12 domain mx-5 mt-3 justify-content-center"><h1 className='text-center' >Web Development</h1>
            <div className="col-4 mx-auto mt-3">
            <img style={{height:"80px" ,width:"80px"}} src={require("../images/Web-Development.jpg")}/><br/>
            </div>
            I absolutely love web development! It's the perfect combination of creativity and logic, where I get to bring my ideas to life through the power of code. One of my favorite stacks to work with is the MERN stack.<br/>I love working with the MERN stack because it provides me with all the necessary tools to create amazing web applications, from the back-end to the front-end. It's a complete and well-rounded stack that allows me to quickly prototype and develop applications without sacrificing scalability and reliability. Whether I'm building a small blog or a complex e-commerce platform, the MERN stack has everything I need to get the job done.
              </div>
            <div className="col-md-3 col-sm-12 domain mx-5 mt-3"><h1 className='text-center' >Problem Solving<div className=" col-3 mx-auto mt-3">
            <img style={{height:"80px" ,width:"80px"}} src={require("../images/problem.jpg")}/><br/>
            </div></h1>I find great joy and fulfillment in solving coding problems. There is a sense of satisfaction that comes with overcoming a challenging programming hurdle. I enjoy the process of dissecting a problem, analyzing it, and coming up with a logical and efficient solution. Coding problems provide an opportunity to exercise my creativity and critical thinking skills. Overall, solving coding problems is a thrilling and rewarding experience for me.</div>
            <div className="col-md-3 col-sm-12 domain mx-5 mt-3"><h1 className='text-center' >ML/AI/Data Science</h1><div className=" col-3 mx-auto mt-3">
            <img style={{height:"80px" ,width:"80px"}} src={require("../images/ML.jpg")}/><br/>
            </div>I love Machine Learning (ML) because it is a powerful tool that can help solve complex problems in various fields. With ML, we can teach computers to learn from data and improve their performance over time, making them more efficient and accurate. In addition, Deep Learning is a subset of ML that uses artificial neural networks to simulate the human brain, allowing computers to classify and recognize patterns in data, such as images and speech.<br/>I have extensive knowledge of ML and Deep Learning, having studied and implemented various algorithms and techniques in my projects. I understand the importance of data pre-processing, feature extraction, algorithm selection, and model evaluation, and use them to create accurate and efficient models.</div>
        </div>
      </div>
    </div>
  )
}
