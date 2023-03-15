import React from "react";
import "./style/ourServices.css";
import img1 from "../images/bag5.jpg";
import img2 from "../images/bag3.png";

const OurServices = () => {
  return (
    <>
      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services section-bg">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-in">OUR SERVICES</h2>
            <p data-aos="fade-in">
              {" "}
              The Main Movtive Of The Website is to make your trip Well Planed
              And in your Budget.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 d-flex" data-aos="fade-right">
              <div className="card">
                <div className="card-img">
                  <img src={img1} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/">Planning</a>
                  </h5>
                  <p className="card-text">
                    Suggesting a best place and Selecting it on the bassis of
                    User's prefered parameters{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex" data-aos="fade-left">
              <div className="card">
                <div className="card-img">
                  <img src={img2} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/">Booking</a>
                  </h5>
                  <p className="card-text">
                    Recommending Sutaiable Lodging and Boarding Options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
