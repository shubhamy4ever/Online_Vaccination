import React from "react";

export const Searchedtable = (props) => {
  return (
    <>
      <div className="my-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Hospital Name</th>
              <th scope="col" className="center-it">Date here</th>
              <th scope="col" className="center-it">Date here</th>
              <th scope="col" className="center-it">Date here</th>
            </tr>
            <tr>
              <th scope="col"> </th>
              <th scope="col">
                <div class="row row-cols-auto">
                  <div class="col">time here</div>
                  <div class="col">time here</div>
                  <div class="col">time here</div>
                </div>
              </th>
              <th scope="col">
                <div class="row row-cols-auto">
                  <div class="col">time here</div>
                  <div class="col">time here</div>
                  <div class="col">time here</div>
                </div>
              </th>
              <th scope="col">
                <div class="row row-cols-auto">
                  <div class="col">time here</div>
                  <div class="col">time here</div>
                  <div class="col">time here</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                {props.name}
                <p className="lighter-cap">
               {props.address}
                </p>
              </th>
              <td>
                <div class="row row-cols-auto my-3 mx-3">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-primary">
                      Left
                    </button>
                    <button type="button" class="btn btn-primary">
                      Middle
                    </button>
                    <button type="button" class="btn btn-primary">
                      Right
                    </button>
                  </div>
                </div>
                <p className="mx-5">vaccine name here</p>
              </td>
              <td>
                <div class="row row-cols-auto my-3 mx-3">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-primary">
                      Left
                    </button>
                    <button type="button" class="btn btn-primary">
                      Middle
                    </button>
                    <button type="button" class="btn btn-primary">
                      Right
                    </button>
                  </div>
                </div>
                <p className="mx-5">vaccine name here</p>
              </td>
              <td>
                <div class="row row-cols-auto my-3 mx-3">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-primary">
                      Left
                    </button>
                    <button type="button" class="btn btn-primary">
                      Middle
                    </button>
                    <button type="button" class="btn btn-primary">
                      Right
                    </button>
                  </div>
                </div>
                <p className="mx-5">vaccine name here</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
