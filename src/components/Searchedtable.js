import React from "react";

export const Searchedtable = (props) => {
  return (
    <>
      <div
        className="my-4"
        style={props.name === "" ? { display: "none" } : { display: "block" }}
      >
        <table className="table">
          <tbody>
            <tr>
              <th scope="col" className="center-it">
                {props.date}
              </th>
            </tr>
            <tr>
              <th scope="row" style={{ width: "400px" }}>
                {props.name}
                <p className="lighter-cap">{props.address}</p>
              </th>
              <td>
                <div className="row row-cols-auto my-3 mx-3">
                  <div className="card bg-g" style={{ width: "8rem" }}>
                    <div className="card-header">
                      {props.time}
                      <br />
                      {props.slots ? props.slots + " Slots" : "N/A"}
                    </div>
                  </div>
                </div>
                <p className="mx-4 center-it-3">{props.vaccineType}</p>
              </td>
              <td>
                <button
                  type="button"
                  disabled={props.slots < 1 ? true : false}
                  className="btn btn-success my-4"
                  onClick={()=>{props.bookVaccine(props.id)}}
                >
                  Book Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
