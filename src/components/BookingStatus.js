import React, { useState, useEffect } from "react";
import BookedCard from "./BookedCard";
import { Link,useHistory  } from "react-router-dom";

export const BookingStatus = (props) => {
  const host = "http://localhost:5000";
let history = useHistory();
  const [bookingStatus, setbookingStatus] = useState([]);
  async function fetchBookingStatus() {
    const response = await fetch(`${host}/api/hosp/bookedstatus`, {
      method: "GET",
      headers: {
        "auth-token":
          localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setbookingStatus(json);
  }
  useEffect(() => {
    if(localStorage.getItem("token")){
      fetchBookingStatus();
    }else{
      history.push("/bookavaccine");
    }
    
    //eslint-disable-next-line
  }, []);
  async function cancelAppointment (id){
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/hosp/delete/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          localStorage.getItem("token"),
      },
    });
    setbookingStatus([]);
    props.showAlert("Appointment cancelled successfully","success");

  }

  return (
    <div className="container my-5 moremargin">
      <div className="container-fluid border-fluid">
        {bookingStatus.length===0&&"You dont have any appointment for vaccination "}
        {bookingStatus.map((element) => {
          return (
            <>
            <BookedCard
              key={element._id}
              name={element.name}
              hospitalname={element.hospitalname}
              address={element.address}
              pincode={element.pincode}
              vaccineType={element.vaccineType}
              date={element.date}
              time={element.time}
              cancelAppointment={cancelAppointment}
              id={element._id}
              />
              </>
          );
        })}
         {/* eslint-disable-next-line */}
        <Link to="/searchhosp" className={`btn btn-primary my-4 ${bookingStatus==""?"":"disabled"}`} >Book Vaccine</Link>
      </div>
    </div>
  );
};
