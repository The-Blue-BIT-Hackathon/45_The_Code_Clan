import React from "react";
import ContactUs from "../components/ContactUs";
import OurServices from "../components/OurServices";
import PlacesForm from "../components/PlacesForm";

const HomePage = () => {
  return (
    <div>
      <PlacesForm />
      <OurServices />
      <ContactUs />
    </div>
  );
};

export default HomePage;
