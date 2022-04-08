import React from "react";
import { MdDelete } from 'react-icons/md';
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
              {props.slots ? props.date : ""}
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
                      {props.slots ? props.time : ""}
                      <br />
                      {props.slots ? props.slots + " Slots" : "N/A"}
                    </div>
                  </div>
                </div>
                <p className="mx-4 center-it-3">{props.slots ? props.vaccineType : ""}</p>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-success my-4"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                  onClick={()=>{props.addslots(props.whole)}}
                >
                  Add / Remove Slots
                </button>
                <MdDelete className="my-3 mx-2 iconr" onClick={()=>{props.deleteHosp(props.id)}}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
