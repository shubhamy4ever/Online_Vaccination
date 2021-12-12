import React,{useState,useContext} from "react";
import { Searchedtable } from "./Searchedtable";
import {mContext} from "../context/MainContext"


export const Searchbypin = () => {
const [hospdata, setHospdata] = useState();
const {hospitalDetails} = useContext(mContext);
  function handleSubmit(){
console.log(hospdata);
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
        />
        <button
          className="btn btn-outline-success rounded-search"
          type="submit" onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      {/*.map will be used to populate */}
      <Searchedtable/>
    </div>
  );
};
