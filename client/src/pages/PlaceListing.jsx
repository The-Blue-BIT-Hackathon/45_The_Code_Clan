import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  // MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";

// import PrettyRating from "pretty-rating-react";
// import {
//   faHeart,
//   faHeartBroken,
//   faStar,
//   faStarHalfAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faHeart as farHeart,
//   faStar as farStar,
// } from "@fortawesome/free-regular-svg-icons";

// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   // MDBIcon,
//   MDBRipple,
//   MDBBtn,
// } from "mdb-react-ui-kit";

import PrettyRating from "pretty-rating-react";
import {
  faHeart,
  faHeartBroken,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PlaceListing = () => {
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("myData"));
  console.log(data);
  // console.log("name: ", data?.context[0]?.name);
  // console.log("desc: ", data?.context[0]?.description);
  // console.log("url: ", data?.context[0]?.url);

  const handlePlan = (name) => {
    axios
      .post("http://ayush45.pythonanywhere.com/get_info", {
        name: name,
      })
      .then((response) => {
        console.log("one place", response.data);
        localStorage.setItem("oneplace", JSON.stringify(response.data));
        // window.location.href = "/PlaceResult";
        navigate("/PlaceResult");
      })
      .catch((error) => {
        console.log("Error sending data", error);
        alert(" No Destination Found");
      });
  };

  return (
    <>
      <MDBContainer fluid>
        {data.context &&
          data.context.map((item) => (
            <MDBRow className="justify-content-center mb-0" key={item.name}>
              <MDBCol md="12" xl="10">
                <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <MDBCardImage
                            src={item.url}
                            fluid
                            className="w-100"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </MDBCol>
                      <MDBCol md="6">
                        <h5>{item.name}</h5>
                        <div className="d-flex flex-row">
                          {/* <div className="text-danger mb-1 me-2"> */}
                          <PrettyRating
                            rating={2}
                            // icons={icons.star}
                            // setColors={colors.star}
                          />
                          {/* </div> */}
                          {/* <span>310</span> */}
                        </div>
                        {/* <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div> */}
                        {/* <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div> */}
                        {/* <p className=" mb-4 mb-md-0">
                          {item.result_object.address}
                        </p>
                      </MDBCol>
                      <MDBCol
                        md="6"
                        lg="3"
                        className="border-sm-start-none border-start"
                      > */}
                        {/* <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$13.99</h4>
                    <span className="text-danger">
                      <s>$20.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6> */}
                        <div className="d-flex flex-column mt-4">
                          <a
                          // href={`https://maps.google.com?q=${item.result_object.latitude},${item.result_object.longitude}`}
                          // href={`https://maps.google.com?q=${item.name}`}
                          >
                            <MDBBtn color="primary" size="sm">
                              Get Location
                            </MDBBtn>
                          </a>

                          <MDBBtn
                            outline
                            color="primary"
                            size="sm"
                            className="mt-2"
                            // onClick={handlePlan(item.name)}
                            onClick={() => handlePlan(item.name)}
                          >
                            Plan
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          ))}
      </MDBContainer>
    </>
  );
};

export default PlaceListing;
