import React, { useState } from "react";
import { useHistory } from "react-router-dom";
export const Signup = (props) => {
  let history = useHistory();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if(json.success===true){
      history.push("/bookavaccine");
      props.showAlert("Account Created Sucessfully","success");
    }else{
      props.showAlert("Invalid-Credentials","danger");
    }
  };
  function onChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container container-223 my-5 ">
          <h1 className="my-3">Signup for booking vaccine</h1>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
              minLength={3}
              name="name"
              onChange={onChange}
              value={credentials.name}
            />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
              minLength={6}
              onChange={onChange}
              value={credentials.email}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              minLength={3}
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              minLength={3}
              name="confirmpassword"
              value={credentials.confirmpassword}
              onChange={onChange}
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>
          <button
            type="submit"
            disabled={
              credentials.password === credentials.confirmpassword
                ? false
                : true
            }
            className="btn btn-primary my-3"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
