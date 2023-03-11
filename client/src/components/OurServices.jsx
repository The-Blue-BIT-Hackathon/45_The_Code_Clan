import React from "react";
import "./style/ourServices.css"
import img1 from "../images/bag1.jpg"

const OurServices = () => {
  return <>
  {/* <!-- ======= Services Section ======= --> */}
    <section id="services" class="services section-bg">
      <div class="container">

        <div class="section-title">
          <h2 data-aos="fade-in">OUR SERVICES</h2>
          <p data-aos="fade-in"> The Main Movtive Of The Website is to make your trip Well Planed And in your Budget.</p>
        </div>

        <div class="row">
          <div class="col-md-6 d-flex" data-aos="fade-right">
            <div class="card">
              <div class="card-img">
                <img src={img1} alt="..."/>
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">Planning</a></h5>
                <p class="card-text">Selecting The Best place to vist on the bassis of User's prefered parameters </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex" data-aos="fade-left">
            <div class="card">
              <div class="card-img">
                <img src={img1} alt="..."/>
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">Booking</a></h5>
                <p class="card-text">Recommending Sutaiable Lodging and Boarding Options.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  
  </>;
};

export default OurServices;
