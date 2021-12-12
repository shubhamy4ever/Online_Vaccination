import React from "react";
import photo1 from "../images/1.jpg";
import photo2 from "../images/2.jpg";
import photo3 from "../images/3.jpg";
import card1 from "../images/cards1.jpg";
import card2 from "../images/cards2.jpg";
import card3 from "../images/cards3.jpg";
export const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={photo1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Covid-19 A pandemic</h5>
              <p>A deadly disease spread through the coronavirus.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={photo2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block ">
              <h5>Caused deaths of more than million lives</h5>
              <p>
                covid spread in world at very fast pace and more than million
                died.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={photo3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>We can defeat covid by Vaccination</h5>
              <p>
                Together we can defeat covid by vaccinating ourselves and
                our loved ones.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
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
        <h2>Frequently Asked Question's:</h2>
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
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
      </footer>
    </>
  );
};
