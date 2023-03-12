import React from "react";
import "./style/placeresult.css";

const data = JSON.parse(localStorage.getItem("myData"));
console.log(data);
console.log("name: ", data.context.name);
console.log("desc: ", data.context.description);

const PlaceResult = () => {
  return (
    <>
      <section className="Output">
        <div className="placename">
          <div className="nameHeading text-center">{data.context.name}</div>
          <div className="descp">{data.context.description}</div>
        </div>

        <div className="palceImage">
          <div className="photo">
            <img src={`${data.context.url}`} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceResult;
