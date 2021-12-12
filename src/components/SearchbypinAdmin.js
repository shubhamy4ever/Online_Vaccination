import React from "react";
import { Searchedtable } from "./Searchedtable";

export const Searchbypin = () => {
  return (
    <div>
      <div className="card my-3">
        <div className="card-body">
          <button className="btn-success">ADD A Hospital</button>
        </div>
      </div>
      <form className="d-flex my-3">
        <input
          className="form-control rounded-searchbox me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success rounded-search"
          type="submit"
        >
          Search
        </button>
      </form>
      {/* .map will be used to populate */}
      <Searchedtable />
    </div>
  );
};
