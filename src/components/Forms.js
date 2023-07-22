import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./component.css";


export default function Forms() {
  
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('http://localhost:6969/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response from the backend
      console.log(response);
      setname('');
      setemail('');
      setmessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-sm-12 text-center">
            <h1>Contact Me</h1>
          </div>
          <div className="col-md-5 offset-md-1 col-sm-12">
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  value={name}
                  placeholder="Enter your full name"
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-Mail ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <input
                  type="test"
                  className="form-control"
                  id="message"
                  value={message}
                  placeholder="Enter your Message"
                  onChange={(e) => setmessage(e.target.value)}
                />
              </div>
              <button type="submit" className="btn" >
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-5 offset-md-1 col-sm-12">
            <h3>Contact info</h3>
            <ul>
              <li className="my-5" style={{ fontSize: "20px" }}>
                <h4 style={{ display: "inline" }}>Address</h4>:Athgaon ,Guwahati
                , Assam ,India-781008
              </li>
              <li className="my-5" style={{ fontSize: "20px" }}>
                <h4 style={{ display: "inline" }}>Contact NO.:</h4>7635999541
              </li>
              <li className="my-5" style={{ fontSize: "20px" }}>
                <h4 style={{ display: "inline" }}>Email Id:</h4>
                manukbanik30@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="row footer mt-5 ps-5 pt-5">
          <div className="col-md-2 col-sm-12 text-center">Connect:</div>
          <div className="col-md-2 col-sm-12">
            <a href="https://www.facebook.com/profile.php?id=100010417385639">
              <img
                style={{ height: "40px", width: "40px", borderRadius: "10px" }}
                src={require("../images/facebook.png")}
                alt=""
                srcset=""
                target="_blank"
                rel="noreferrer"
              />{" "}
              Facebook
            </a>
          </div>
          <div className="col-md-2 col-sm-12">
            <a href="https://www.instagram.com/mrinal_nits/">
              <img
                style={{ height: "40px", width: "40px" }}
                src={require("../images/instagram.png")}
                alt=""
                srcset=""
                target="_blank"
                rel="noreferrer"
              />{" "}
              Instagram
            </a>
          </div>
          <div className="col-md-2 col-sm-12">
            <a href=" https://twitter.com/mrinal_kangsa?t=wL3kcL_IYtJlqCwYBgYmeA&s=08 ">
              <img
                style={{ height: "40px", width: "40px", borderRadius: "2px" }}
                src={require("../images/twitter.png")}
                alt=""
                srcset=""
                target="_blank"
                rel="noreferrer"
              />{" "}
              Twitter
            </a>
          </div>
          <div className="col-md-2 col-sm-12">
            <a href="https://www.linkedin.com/in/mrinal-kangsa-banik-43b84a223/">
              <img
                style={{ height: "40px", width: "40px", borderRadius: "10px" }}
                src={require("../images/linkedin.png")}
                alt=""
                srcset=""
                target="_blank"
                rel="noreferrer"
              />{" "}
              Linkedin
            </a>
          </div>
          <div className="col-md-2 col-sm-12">
            <a href="https://github.com/Mrinalkbanik01">
              <img
                style={{ height: "40px", width: "40px", borderRadius: "10px" }}
                src={require("../images/gtihub.png")}
                alt=""
                srcset=""
              />{" "}
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
