import React,{useState} from "react";
import {useHistory} from "react-router-dom";

export const Admin = (props) => {
  localStorage.removeItem("token");
  let history = useHistory();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if(json.success===true){
      localStorage.setItem("token",json.authtoken);
      history.push("/searchhospadmin")
      props.showAlert("Logged In Successfully","success");
    }else{
      props.showAlert("invalid cedentials","danger");
    }
  };
  function onChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

      <div className="container container-223 my-5 ">
        <h1 className="my-3">Login to book vaccine</h1>
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
        <button type="submit"  className="btn btn-primary my-3">
          Log In
        </button>
      </div>
      </form>
    </div>
  );
};
