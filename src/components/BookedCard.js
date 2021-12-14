import React from "react";


export default function BookedCard(props) {

    return (
<div className="card">
  <div className="card-header">
    Your Booking Status:
  </div>
  <div className="card-body" style={props.hospitalname === "" ? { display: "none" } : { display: "block" }}>
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text lighter-cap2">{props.hospitalname} {props.address} {props.pincode}</p>
    <p className="card-text lighter-cap2">On {props.date} at {props.time}</p>
    <p className="card-text lighter-cap2">{props.vaccineType}</p>
    {/* alert after deleting  */}
          <i className="fas fa-trash-alt my-3 mx-2" onClick={()=>{props.cancelAppointment(props.id)}}> Cancel Appointment</i>
  </div>
</div>
    )
}
