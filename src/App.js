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
import Alert from "./components/Alert"


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



// for alert auto dismissable 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
        <Router>
        <Navbar />
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/totalcases">
            <TotalCases />
          </Route>
          <Route exact path="/bookavaccine">
            <BookAVaccine showAlert={showAlert}/>
          </Route>
          <Route exact path="/admin">
            <Admin showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup">
            <Signup showAlert={showAlert}/>
          </Route>
          <Route exact path="/bookingstatus">
          <BookingStatus showAlert={showAlert}/>
          </Route>
          <Route exact path="/searchhosp">
          <Searchbypin hospdetails={hospdetails} fetchdata={fetchdata} showAlert={showAlert}/>
          </Route>
          <Route exact path="/searchhospadmin">
          <Searchbypinadmin hospdetails={hospdetails} fetchdata={fetchdata} showAlert={showAlert}/>
          </Route>
        </Switch> 
      </Router>


    </>
  );
}

export default App;
