import React from "react";
import card1 from "./images/cards1.jpg";
import card2 from "./images/cards2.jpg";
import card3 from "./images/cards3.jpg";
import endpandemic from "./videos/endpandemic.mp4";
export const Home = () => {
  localStorage.removeItem("token");
  return (
    <div className="top-more">
      <div className="maincont2 ">
        <video autoPlay loop muted >
          <source src={endpandemic} type="video/mp4" />
        </video>
      </div>
      <div className="card ">
        <div className="card-body">
          <div className="d-flex height bd-highlight">
            <div className="p-2 flex-fill bd-highlight align-self-center helpinfo">
              Helpline number
            </div>
            <div className="p-2 flex-fill bd-highlight align-self-center">
              {" "}
              Health Ministry: 1075
            </div>
            <div className="p-2 flex-fill bd-highlight align-self-center">
              Number: 91-11-23978046
            </div>
            <div className="p-2 flex-fill bd-highlight align-self-center">
              Senior Citizen: 14567
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-evenly my-3">
        <div
          className="card card-main border border-2 my-4"
          style={{ width: "23rem", height: "30rem" }}
        >
          <img src={card1} className="card-img-top my-3" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Will protect from covid and keep you safe.
            </p>
          </div>
        </div>
        <div
          className="card card-main border border-2 my-4"
          style={{ width: "23rem", height: "29rem" }}
        >
          <img src={card2} className="card-img-top my-3" alt="..." />
          <div className="card-body">
            <p className="card-text">Both the variety of vaccine availabe.</p>
          </div>
        </div>
        <div
          className="card card-main border border-2 my-4"
          style={{ width: "23rem", height: "29rem" }}
        >
          <img src={card3} className="card-img-top  " alt="..." />
          <div className="card-body my-3">
            <p className="card-text ">
              Fully online vaccination website easy safe and reliable.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h2 className="my-3">Frequently Asked Question's:</h2>
        <div className="accordion my-4 container" id="faq">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Where can I register for COVID-19 vaccination?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  You can signup and then login and book vaccine on this
                  website.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Is online registration mandatory for Covid-19 vaccination?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  As this is just a dummy website for covid vaccination yes it
                  is madnatory to book vaccine online via this website
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Is there any registration charges to be paid?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>No. There is no registration charge. </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How can I find the nearest Vaccination Center?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Just Login and type the nearest pincode to search for the
                  hospital.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Where will I receive confirmation of date and time of
                vaccination?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  After booking a particluar hospital for appointement you will
                  be redirected to your booking status where your currently
                  booked appointment will be displayed
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="centerfooter">
          {" "}
          Copyright &copy; All rights reserved
        </div>
        <div className="centerfooter"> Website By Shubham Y</div>
        <div className="toright">v2.1.1</div>
      </footer>
    </div>
  );
};
