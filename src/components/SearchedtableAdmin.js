import React from "react";

export const Searchedtable = (props) => {

  return (
    <>
      <div className="my-4">
        <table className="table">
          <tbody>
          <tr>
              <th scope="col">Hospital Name</th>
              <th scope="col" className="center-it">
                {props.hosp.date}
              </th>
              </tr>
            <tr>
              <th scope="row">
                {props.hosp.name}
                <p className="lighter-cap">
               {props.hosp.address}
                </p>
              </th>
              <td>
                <div className="row row-cols-auto my-3 mx-3">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    
                    <button type="button" className="btn btn-primary">
                     {props.hosp.time}<br />
                      {props.hosp.slots} Slots
                    </button>
                  </div>
                </div>
                <p className="mx-4 center-it-3">{props.hosp.vaccineType}</p>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
