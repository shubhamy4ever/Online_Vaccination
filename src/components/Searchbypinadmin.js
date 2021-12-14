import React, { useState, useRef } from "react";

import { Searchedtableadmin } from "./Searchedtableadmin";

export const Searchbypinadmin = (props) => {
  //use effect first the setting and initialzing state

  const host = "http://localhost:5000";

  const [search, setSearch] = useState({ pincode: "" });

  function handleSubmit() {
    props.fetchdata(search);
  }

  function handleChange(e) {
    e.preventDefault();
    setSearch({ [e.target.name]: e.target.value });
  }

  let refClose = useRef();
  let refRefresh = useRef();
  const [hospdetails, sethospdetails] = useState([]);

  //add slots taking whole clicked current hospital details by props function calling parameter
  function addslots(currenthospdetails) {
    sethospdetails({
      id: currenthospdetails._id,
      name: currenthospdetails.name,
      vaccineType: currenthospdetails.vaccineType,
      address: currenthospdetails.address,
      pincode: currenthospdetails.pincode,
      slots: currenthospdetails.slots,
      date: currenthospdetails.date,
      time: currenthospdetails.time,
    });
  }
  const onChange = (e) => {
    e.preventDefault();
    sethospdetails({ ...hospdetails, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    // id title descr tag of that particular note which edit button is clicked taken from updateNote
    //not passed argument as object
    addSlots(
      hospdetails.id,
      hospdetails.vaccineType,
      hospdetails.slots,
      hospdetails.date,
      hospdetails.time
    );
    //useref.current. event on which it will trigger
    refClose.current.click();
  };
  async function addSlots(id, vaccineType, slots, date, time) {
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/hosp/updatedetails/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYxYjQzYjI4MGYwMDQ0MGI5OTQ3NGRlNSJ9LCJpYXQiOjE2MzkyMDI2MDh9.da5JpmFll_qbPjzRWtGoopZKjUypLDjOE2KmlRaPTc0",
      },
      body: JSON.stringify({ vaccineType, slots, date, time }),
    });
    refRefresh.current.click();
  }

  //add hospital
  async function addhospital(name, address, pincode) {
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/hosp/addhospitals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYxYjQzYjI4MGYwMDQ0MGI5OTQ3NGRlNSJ9LCJpYXQiOjE2MzkyMDI2MDh9.da5JpmFll_qbPjzRWtGoopZKjUypLDjOE2KmlRaPTc0",
      },
      body: JSON.stringify({ name, address, pincode }),
    });
    
  }
  const [hospdetadd, sethospdetadd] = useState({name:"",address:"",pincode:""});
  function handleClick2() {
    addhospital(
       hospdetadd.name,
       hospdetadd.address,
      hospdetadd.pincode,
    );
    refClose.current.click();
    sethospdetadd({name:"",address:"",pincode:""});
  }
  function onChange2(e) {
    e.preventDefault();
    sethospdetadd({ ...hospdetadd, [e.target.name]: e.target.value });
  }
  async function deleteHosp(id){
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/hosp/deletedata/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYxYjQzYjI4MGYwMDQ0MGI5OTQ3NGRlNSJ9LCJpYXQiOjE2MzkyMDI2MDh9.da5JpmFll_qbPjzRWtGoopZKjUypLDjOE2KmlRaPTc0",
      },
    });
    refRefresh.current.click();
  }

  return (
    <div className="container my-5 moremargin">
      <div>
        {" "}
        <button
          className="btn-success my-4"
          data-bs-toggle="modal"
          data-bs-target="#addhosp"
        >
          {" "}
          Add A Hospital
        </button>
      </div>
      {/* add hospital modal */}
      <div
        className="modal fade"
        id="addhosp"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Hospital
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlhtmlFor="title" className="form-label" name="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  aria-describedby="emailHelp"
                  name="name"
                  onChange={onChange2}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" name="address">
                  address
                </label>

                <input
                  type="Text"
                  className="form-control"
                  id="description"
                  name="address"
                  onChange={onChange2}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" name="pincode">
                  pincode
                </label>

                <input
                  type="Text"
                  className="form-control"
                  id="description"
                  name="pincode"
                  onChange={onChange2}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick2}
                disabled={hospdetadd.pincode.length<6||hospdetadd.pincode.length>6?true:false}
              >
                Add Hospital
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* add slots modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Slots
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlhtmlFor="title" className="form-label" name="title">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  aria-describedby="emailHelp"
                  name="name"
                  value={hospdetails.name}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" name="address">
                  address
                </label>

                <input
                  type="Text"
                  className="form-control"
                  id="description"
                  name="address"
                  value={hospdetails.address}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" name="description">
                  Date
                </label>

                <input
                  type="date"
                  className="form-control"
                  id="description"
                  name="date"
                  onChange={onChange}
                  value={hospdetails.date}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" name="description">
                  Time
                </label>

                <select
                  className="form-control"
                  id="time"
                  name="time"
                  onChange={onChange}
                  value={hospdetails.time}
                >
                  <option value="10:30">10:30 AM</option>
                  <option value="12:30">12:30 AM</option>
                  <option value="2:30">2:30 PM</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label" name="description">
                  Vaccine Type
                </label>

                <select
                  className="form-control"
                  id="vaccineType"
                  name="vaccineType"
                  onChange={onChange}
                  value={hospdetails.vaccineType}
                >
                  <option value="covaxin">Covaxin</option>
                  <option value="Covishield">Covishield</option>
                </select>
              </div>
              <div className="mb-3 my-3">
                <label htmlFor="slots">slots (10-100) </label>

                <input
                  type="number"
                  id="slots"
                  name="slots"
                  min="10"
                  max="100"
                  onChange={onChange}
                  value={hospdetails.slots}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={hospdetails.date && hospdetails.slots?false:true}
              >
                Add Slots
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* search Section */}
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
          disabled={search.pincode.length < 6 ? true : false}
          ref={refRefresh}
        >
          Search
        </button>
      </form>

      {/*.map will be used to populate  table body that is reusable*/}
      <div>
        {props.hospdetails === null
          ? alert("empty box")
          : props.hospdetails.map((hosp) => {
              return (
                <Searchedtableadmin
                  key={hosp._id}
                  name={hosp.name}
                  date={hosp.date}
                  time={hosp.time}
                  slots={hosp.slots}
                  vaccineType={hosp.vaccineType}
                  address={hosp.address}
                  id={hosp._id}
                  whole={hosp}
                  addslots={addslots}
                  deleteHosp={deleteHosp}
                />
              );
            })}
      </div>
    </div>
  );
};
