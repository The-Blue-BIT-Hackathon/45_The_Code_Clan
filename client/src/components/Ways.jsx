import React from "react";

const Ways = () => {
  const body = {
    mode: "drive",
    sources: [{ location: [73.8544541, 18.521428] }],
    targets: [{ location: [77.002632, 20.7116604] }],
  };
  fetch(
    "https://api.geoapify.com/v1/routematrix?apiKey=0e2cebca93954548bfeb4797649f9b1c",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((res) => res.json())
    .then((res) => console.log(res));

  return <div></div>;
};

export default Ways;
