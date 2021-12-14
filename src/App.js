import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { TotalCases } from "./components/TotalCases";
import { BookAVaccine } from "./components/BookAVaccine";
import { Admin } from "./components/Admin";
import { Signup } from "./components/Signup";
import { Searchbypin } from "./components/Searchbypin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';
import {BookingStatus} from "./components/BookingStatus"
import { Searchbypinadmin } from "./components/Searchbypinadmin";



function App() {

  //fetch hospital by pincode
  const [hospdetails, setHospdetails] = useState([{_id:"empty",name:"",address:"address here",vaccineType:"vaccine name here"}])
  const host = "http://localhost:5000";
  const fetchdata = async (pincode) => {
    //Api call

    const response = await fetch(`${host}/api/hosp/fetchhosptdetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(pincode),
    });

    const json = await response.json();
    setHospdetails(json);

  };





  return (
    <>
    
{/* temporary */}







      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/totalcases">
            <TotalCases />
          </Route>
          <Route exact path="/bookavaccine">
            <BookAVaccine />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/bookingstatus">
          <BookingStatus />
          </Route>
          <Route exact path="/searchhosp">
          <Searchbypin hospdetails={hospdetails} fetchdata={fetchdata}/>
          </Route>
          <Route exact path="/searchhospadmin">
          <Searchbypinadmin hospdetails={hospdetails} fetchdata={fetchdata}/>
          </Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;
