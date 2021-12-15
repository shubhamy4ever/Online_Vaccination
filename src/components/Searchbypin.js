import React, { useState} from "react";
import { Searchedtable } from "./Searchedtable";
import { useHistory } from "react-router-dom";

export const Searchbypin = (props) => {
  //use effect first the setting and initialzing state

const host="http://localhost:5000"

let history = useHistory();
  const [search, setSearch] = useState({pincode:""});
 
  if(!localStorage.getItem("token")){
    history.push("/bookavaccine")
    props.showAlert("Trying to access unauthorized page Login first!!","danger");
  }

  function handleSubmit() {
props.fetchdata(search);
}

async function bookVaccine(id){
  // eslint-disable-next-line
  const response = await fetch(`${host}/api/hosp/bookvaccine/${id}`, {
    method: "PUT",
    headers: {
      "auth-token":
        localStorage.getItem("token"),
    },
  });
  history.push("/bookingstatus");
  props.showAlert("Appointement booked successfully","success");
}

function handleChange(e) {
    e.preventDefault();
    setSearch({ [e.target.name]: e.target.value });
    }
  return (
    <div className="container my-5 moremargin">
      <h2>Search By Pincode</h2>
      <form className=" d-flex my-2">
        <input
          className="form-control rounded-searchbox me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="pincode"
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-success rounded-search"
          type="button"
          onClick={handleSubmit}
          disabled={search.pincode.length<6?true:false}
        >
          Search
        </button>
      </form>

      {/*.map will be used to populate  table body that is reusable*/}
      <div>
        {props.hospdetails===null?alert("empty box"):props.hospdetails.map((hosp) => {
          return (
            <Searchedtable
              key={hosp._id}
              name={hosp.name}
              date={hosp.date}
              time={hosp.time}
              slots={hosp.slots}
              vaccineType={hosp.vaccineType}
              address={hosp.address}
              bookVaccine={bookVaccine}
              id={hosp._id}
            />
          );
        })}
      </div>
    </div>
  );
};
