import React from "react";

const data = JSON.parse(localStorage.getItem("myData"));
console.log(data);
console.log("name: ", data.context.name);
console.log("desc: ", data.context.description);

const PlaceResult = () => {
  return (
    <>
      <div>{data.name}</div>
      <div>{data.description}</div>
    </>
  );
};

export default PlaceResult;
