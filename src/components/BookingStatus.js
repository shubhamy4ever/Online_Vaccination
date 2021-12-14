import React, { useState, useEffect } from "react";
import BookedCard from "./BookedCard";
import { Link  } from "react-router-dom";

export const BookingStatus = () => {
  const host = "http://localhost:5000";

  const [bookingStatus, setbookingStatus] = useState([]);
  async function fetchBookingStatus() {
    const response = await fetch(`${host}/api/hosp/bookedstatus`, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiMzYxMGMyYzZkYTQzNmU0ZjI1MzMyIn0sImlhdCI6MTYzOTIwNjkwNn0.GrhDsCTKSXZysW6tR5pmyoMclA8DBALANEsE23fAhYQ",
      },
    });
    const json = await response.json();
    setbookingStatus(json);
  }
  useEffect(() => {
    fetchBookingStatus();
  }, []);
  async function cancelAppointment (id){
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/hosp/delete/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiMzYxMGMyYzZkYTQzNmU0ZjI1MzMyIn0sImlhdCI6MTYzOTIwNjkwNn0.GrhDsCTKSXZysW6tR5pmyoMclA8DBALANEsE23fAhYQ",
      },
    });
    setbookingStatus([]);

  }

  return (
    <div className="container my-5 moremargin">
      <div className="container-fluid border-fluid">
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
