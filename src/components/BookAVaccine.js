import React from "react";
import { Link } from "react-router-dom";

export const BookAVaccine = () => {
  return (
    <div className="container container-223 my-5 ">
      <h1 className="my-3">Login for booking vaccine</h1>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlhtmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlhtmlFor="floatingPassword">Password</label>
      </div>
      <div className="my-3">
        <p>
          Dont Have a Account Please <Link to="/signup">Sign up</Link> First!
        </p>
      </div>
      <button type="button" className="btn btn-primary">
        Log In
      </button>
    </div>
  );
};
