import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cnfpass, setCnfpass] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && pass && cnfpass) {
      if (pass === cnfpass) {
        alert("form submit successfully");
      }
      else {
        alert("password did not match");
      }

    } 
    else {
      alert("All field are mandatory");
    }
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div>
          <p className="namefield">Name</p>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <p className={name ? "data" : "noData"}>
            {name ? "" : "Name is required*"}
          </p>
        </div>
        <div>
          <p className="namefield">Email</p>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <p className={email ? "data" : "noData"}>
            {email ? "" : "Email is required*"}
          </p>
        </div>
        <div>
          <p className="namefield">Password</p>
          <input
            type="password"
            onChange={(event) => setPass(event.target.value)}
          />
          <p className={pass ? "data" : "noData"}>
            {pass ? "" : "Password is required*"}
          </p>
        </div>
        <div>
          <p className="namefield">Confirm Password</p>
          <input
            type="password"
            onChange={(event) => setCnfpass(event.target.value)}
          />
          <p className={cnfpass ? "data" : "noData"}>
            {cnfpass ? "" : "confirmPassword is required*"}
          </p>
        </div>
        <div>
          <button className="btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
