import React from "react";

import { TiCancel } from 'react-icons/ti';

export default function BookedCard(props) {

    return (
<div className="card">
  <div className="card-header">
   <h3> Your Booking Status:</h3>
  </div>
  <div className="card-body" style={props.hospitalname === "" ? { display: "none" } : { display: "block" }}>
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text lighter-cap2">{props.hospitalname} {props.address} {props.pincode}</p>
    <p className="card-text lighter-cap2">On {props.date} at {props.time}</p>
    <p className="card-text lighter-cap2">{props.vaccineType}</p>
    {/* alert after deleting  */}
          <button className="my-1 btn btn-danger iconr" onClick={()=>{props.cancelAppointment(props.id)}} > <TiCancel/> Cancel Appointment </button>
  </div>
</div>
    )
}
