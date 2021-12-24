import React from "react";
export const Searchedtableadmin = (props) => {

  return (
    <>
      <div
        className="my-4"
        style={props.name === "" ? { display: "none" } : { display: "block" }}
      >
        <table className="table">
          <tbody>
            <tr>
              <th scope="col" className="center-it-admin">
                {props.date}
              </th>
            </tr>
            <tr>
            <th scope="row" style={{ width: "400px" }}>
                {props.name}
                <p className="lighter-cap">{props.address}</p>
              </th>
              <td>
                <div className="row row-cols-auto my-3 mx-3 center-it-box">
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
                  className="btn btn-success my-4"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                  onClick={()=>{props.addslots(props.whole)}}
                >
                  Add Slots
                </button>
                <i className="fas fa-trash-alt my-3 mx-2" onClick={()=>{props.deleteHosp(props.id)}}></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
