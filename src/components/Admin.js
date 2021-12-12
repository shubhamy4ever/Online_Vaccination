import React from "react";

export const Admin = () => {
  return (
    <div className="container container-223 my-5">
      <h2 className="my-4">Admin Login</h2>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button type="button" className="btn btn-primary my-3">
        Login
      </button>
    </div>
  );
};
