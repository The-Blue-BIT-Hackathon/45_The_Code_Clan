import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style/placeresult.css";

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
import { useHref } from "react-router-dom";

const data = JSON.parse(localStorage.getItem("myData"));
console.log(data);
console.log("name: ", data?.context?.name);
console.log("desc: ", data?.context?.description);

const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
  heart: {
    complete: faHeart,
    half: faHeartBroken,
    empty: farHeart,
  },
};

const colors = {
  star: ["#d9ad26", "#d9ad26", "#434b4d"],
  heart: ["#9b111e", "#a83f39"],
};


const PlaceResult = () => {
  // const [city, setCity] = useState();
  
  // setCity("Shegaon")

  let city = "Sindhudurg"

  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/locations/search",
    params: {
      query: `${city}, maharashtra`,
      units: "km",
      currency: "INR",
      sort: "relevance",
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Key": "2df90b4889msh32dcc7728719a7cp18d2e0jsne7949d44abff",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .request(options)
        .then(function (response) {
          const ans = response.data;
          console.log("data: ", response.data);
          const filteredData = ans.data.filter(
            (item) =>
              item.result_object.ancestors[0].name === `${city}` &&
              (item.result_type === "hotel" ||
                item.result_type === "lodging" ||
                item.result_type === "restaurants")
          );
          setJsonData(filteredData);
          console.log("filtered data: ", filteredData);
        })
        .catch(function (error) {
          console.error(error);
          alert("no hotels found");
          
        });
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  // var map = L.map("map").setView([51.5, -0.1], 12);
  // L.tileLayer(
  //   "https://retina-tiles.p.rapidapi.com/local/osm{r}/v1/{z}/{x}/{y}.png?rapidapi-key=544c68c18fmsh5cd02ddc3b2804dp101397jsnfe432c21af29",
  //   {
  //     attribution:
  //       'Tiles &copy: <a href="https://www.maptilesapi.com/retina-tiles/">Retina Tiles API</a>, Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //     maxZoom: 19,
  //   }
  // ).addTo(map);

  return (
    <>
      {/* place result */}
      <section className="Output">
        <div className="placename">
          <div className="nameHeading text-center">{data?.context?.name}</div>
          <div className="descp">{data?.context?.description}</div>
        </div>

        <div className="palceImage">
          <div className="photo">
            <img src={`${data?.context?.url}`} alt="" />
          </div>
        </div>
      </section>

      {/* hotels,  lodging and restaurents */}

      <MDBContainer fluid>
        {jsonData &&
          jsonData.map(
            // (item) => (
            //   // <div key={item.result_object.location_id}>
            //   //   <h2>{item.result_object.name}</h2>
            //   //   <img
            //   //     src={item.result_object.photo?.images.large.url}
            //   //     alt={item.result_object.name}
            //   //   />
            //   // </div>

            //   // item.result_object.address_obj.city == "shegaon" &&
            //   <div className="container d-flex justify-content-center ">
            //     {/* <div className="row"> */}
            //     {/* <div className="col-md-4"> */}
            //     <div className="card">
            //       <div>
            //         {" "}
            //         <img
            //           src={item.result_object.photo?.images.large.url}
            //           className="img-responsive image"
            //         />{" "}
            //       </div>
            //       <p className="rating">
            //         {item.result_object.rating
            //           ? item.result_object.rating
            //           : "⭐"}
            //       </p>
            //       <div className="card-body">
            //         <h5 className="card-title">{item.result_object.name}</h5>
            //         <p className="card-text">
            //           <i className="fa fa-map-marker marker"></i>{" "}
            //           {item.result_object.address}
            //         </p>
            //         <p className="card-text">
            //           <i className="fa fa-star star-rating"></i>
            //           <i className="fa fa-star star-rating"></i>
            //           <i className="fa fa-star star-rating"></i>
            //           <i className="fa fa-star star-rating"></i>
            //         </p>
            //       </div>

            //       {/* <!-- Button trigger modal --> */}
            //       <button
            //         type="button"
            //         class="btn btn-primary"
            //         data-toggle="modal"
            //         data-target="#exampleModalCenter"
            //       >
            //         View on Map
            //       </button>

            //       {/* <!-- Modal --> */}
            //       <div
            //         class="modal fade"
            //         id="exampleModalCenter"
            //         tabindex="-1"
            //         role="dialog"
            //         aria-labelledby="exampleModalCenterTitle"
            //         aria-hidden="true"
            //       >
            //         <div
            //           class="modal-dialog modal-dialog-centered"
            //           role="document"
            //         >
            //           <div class="modal-content">
            //             <div class="modal-body">{/* <MapView /> */}</div>
            //             <div class="modal-footer">
            //               <button
            //                 type="button"
            //                 class="btn btn-danger"
            //                 data-dismiss="modal"
            //               >
            //                 Close
            //               </button>
            //               {/* <button type="button" class="btn btn-primary">
            //                 Save changes
            //               </button> */}
            //             </div>
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // )
            // </div>
            // </div>

            (item) => (
              <MDBRow
                className="justify-content-center mb-0"
                key={item.result_object.location_id}
              >
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
                              src={item.result_object.photo?.images.large.url}
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
                          <h5>{item.result_object.name}</h5>
                          <div className="d-flex flex-row">
                            {/* <div className="text-danger mb-1 me-2"> */}
                            <PrettyRating
                              rating={3}
                              icons={icons.star}
                              setColors={colors.star}
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
                          <p className=" mb-4 mb-md-0">
                            {item.result_object.address}
                          </p>
                        </MDBCol>
                        <MDBCol
                          md="6"
                          lg="3"
                          className="border-sm-start-none border-start"
                        >
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
                              href={`https://maps.google.com?q=${item.result_object.name}`}
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
                            >
                              Add to wish list
                            </MDBBtn>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            )
          )}
      </MDBContainer>
    </>
  );
};

export default PlaceResult;
