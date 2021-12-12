import React from "react";

export const Signup = () => {
  return (
    <div>
      <div className="container container-223 my-5 ">
        <h1 className="my-3">Signup for booking vaccine</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            minLength={3}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            minLength={6}
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
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="button" className="btn btn-primary my-3">
          Sign Up
        </button>
      </div>
    </div>
  );
};
