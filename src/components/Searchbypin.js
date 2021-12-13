import React, { useState} from "react";
import { Searchedtable } from "./Searchedtable";

export const Searchbypin = (props) => {
  //use effect first the setting and initialzing state




  const [search, setSearch] = useState({pincode:""});
 
  function handleSubmit() {
props.fetchdata(search);
}

function handleChange(e) {
    e.preventDefault();
    setSearch({ [e.target.name]: e.target.value });
    }
  return (
    <div className="container my-5">
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
            />
          );
        })}
      </div>
    </div>
  );
};
