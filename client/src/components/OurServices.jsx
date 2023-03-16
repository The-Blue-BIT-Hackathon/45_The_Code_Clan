import React from "react";
import "./style/ourServices.css";
import img1 from "../images/bag5.jpg";
import img2 from "../images/bag3.png";

const OurServices = () => {
  return (
    <>
    {/* WHy- section  */}

    <section className="whySection">
       <div className="container">
           <div className="section-title">
            <h2>WHY MAIBHOMI</h2>
           </div>

           <div className="Descrp">
            <p>
            Maharashtra literally means the "Great State" or "Great Nation". The name is believed to have been originated perhaps from the word Rathi, which means "Chariot driver" and "builders of chariot" who were called as "Maharathis" or "Fighting Force". Known for its amazing natural beauty and rich cultural heritage, Maharashtra is one of the most industrialized states of India. Some of the prime cities of Maharashtra include Mumbai, Pune, Nagpur, Nashik, Shirdi, and Kolhapur.
            </p>
           
           </div>




       </div>
    </section>
      
      
      
      
      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services section-bg">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-in">OUR SERVICES</h2>
            <p data-aos="fade-in">
              {" "}
              The Main Movtive Of The Website is to make your trip Well Planed
              And in your Budget. We aim to provide you an amazing and feasible experience of travelling all these places in Maharashtra.
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
