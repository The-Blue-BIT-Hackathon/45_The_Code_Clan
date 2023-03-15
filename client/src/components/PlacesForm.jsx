import React, { useEffect, useState } from "react";
import "./style/placeForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
// import i18n from "i18next";

const PlacesForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    district: "",
    region: "",
    activity: "",
    price_range: "",
    recommended_for: "",
  });

  useEffect(() => {
    console.log("fornmdata", formData);
  }, [formData]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("fornmdata", formData);

    axios
      .post("http://ayush45.pythonanywhere.com/get_destination", formData)
      .then((response) => {
        console.log("Data sent successfully", response.data);
        localStorage.setItem("myData", JSON.stringify(response.data));
        window.location.href = "/PlaceResult";
        navigate("/PlaceResult");
      })
      .catch((error) => {
        console.log("Error sending data", error);
        alert(" No Destination Found");
      });

    // console.log("button clicked");

    // Extract form data from the event object
    // const { district, region, price_range, activity, recommended_for } = formData;

    // Construct the JSON object from the form data
    // const formDataJson = {
    //   district,
    //   region,
    //   price_range,
    //   activity,
    //   recommended_for,
    // };

    // console.log("formdatajson", formDataJson);
    // Do something with the formDataJson, e.g. send it to a server via API
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const { t } = useTranslation();

  // i18n.changeLanguage("mr");

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <>
      <section className="mainSection">
        {/* <div>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("mr")}>Marathi</button>
        </div> */}
        <div className="placeForm text-center">
          <div className="form-heading ">{t("formTitle")}</div>

          <form className="form-structure " onSubmit={handleFormSubmit}>
            <div className="row r1">
              <div className="col">
                <div className="form-outline">
                  {/* <label  className="form-label">Desitination district</label> */}
                  <select
                    id="district"
                    name="district"
                    className=" formin text-center"
                    value={formData.district}
                    onChange={handleInputChange}
                
                  >
                    <option defaultValue>Desitination district</option>
                    <option value="Akola">Akola</option>
                    <option value="Ahmednagar">Ahmednagar</option>
                    <option value="Amravati">Amravati</option>
                    <option value="Sambhaji Nagar">Sambhaji Nagar</option>
                    <option value="Beed">Beed</option>
                    <option value="Bhandara">Bhandara</option>
                    <option value="Buldhana">Buldhana</option>
                    <option value="Chandrapur">Chandrapur</option>
                    <option value="Dhule">Dhule</option>
                    <option value="Gadchiroli">Gadchiroli</option>
                    <option value="Gondia">Gondia</option>
                    <option value="Hingoli">Hingoli</option>
                    <option value="Jalgaon">Jalgaon</option>
                    <option value="Jalna">Jalna</option>
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Latur">Latur</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Nandurbar">Nandurbar</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Nanded">Nanded</option>
                    <option value="Osmanabad">Osmanabad</option>
                    <option value="Parbhani">Parbhani</option>
                    <option value="Pune">Pune</option>
                    <option value="Raigad">Raigad</option>
                    <option value="Ratnagiri">Ratnagiri</option>
                    <option value="Sangli">Sangli</option>
                    <option value="Satara">Satara</option>
                    <option value="Sindhudurg">Sindhudurg</option>
                    <option value="Solapur">Solapur</option>
                    <option value="Thane">Thane</option>
                    <option value="Wardha">Wardha</option>
                    <option value="Yavatmal">Yavatmal</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  {/* <label  className="form-label">Region</label> */}
                  <select
                    id="inputState"
                    name="region"
                    className=" formin text-center"
                    value={formData.region}
                    onChange={handleInputChange}
                  >
                    <option defaultValue>Region</option>
                    <option value="Northern Maharashtra">
                      Northern Maharashtra
                    </option>
                    <option value="Vidharbha">Vidharbha</option>
                    <option value="Marathwada">Marathwada</option>
                    <option value="Western Maharashtra">
                      Western Maharashtra
                    </option>
                    <option value="Kokan">Kokan</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  {/* <label  className="form-label">Budget price_range</label> */}
                  <select
                    id="inputState"
                    name="price_range"
                    className=" formin text-center"
                    value={formData.price_range}
                    onChange={handleInputChange}
                  >
                    <option defaultValue>Budget price_range</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row r2">
              <div className="col">
                <div className="form-outline">
                  {/* <label  className="form-label">activity to Perform</label> */}
                  <select
                    id="inputState"
                    name="activity"
                    className=" formin text-center"
                    value={formData.activity}
                    onChange={handleInputChange}
                  >
                    <option defaultValue>activity to Perform</option>
                    <option value="Religious Tourism">
                      Religious Tourism{" "}
                    </option>
                    <option value="Wildlife Safari, Bird Watching">
                      Wildlife Safari,Bird Watching{" "}
                    </option>
                    <option value="Trekking, Sightseeing">
                      Trekking, Sightseeing{" "}
                    </option>
                    <option value="Trekking, Waterfalls, Caves">
                      Trekking, Waterfalls, Caves{" "}
                    </option>
                    <option value="Heritage Tourism, Caves">
                      Heritage Tourism, Caves{" "}
                    </option>
                    <option value="Heritage Tourism, Sightseeing">
                      Heritage Tourism, Sightseeing{" "}
                    </option>
                    <option value="Trekking, Wildlife Sanctuary">
                      Trekking, Wildlife Sanctuary{" "}
                    </option>
                    <option value="Sightseeing">Sightseeing </option>
                    <option value="Science">Science </option>
                    <option value="Sightseeing,water sports">
                      Sightseeing,water sports{" "}
                    </option>
                    <option value="Water Sports, Fort">
                      Water Sports, Fort{" "}
                    </option>
                    <option value="Hill Station">Hill Station </option>
                    <option value="Beach,  Water Sports">
                      Beach, Water Sports
                    </option>
                    <option value="Aashram">Aashram </option>
                  </select>
                </div>
              </div>

              <div className="col">
                <div className="form-outline">
                  {/* <label  className="form-label">Recomended For</label> */}
                  <select
                    id="inputState"
                    name="recommended_for"
                    className=" formin text-center"
                    value={formData.recommended_for}
                    onChange={handleInputChange}
                  >
                    <option defaultValue>Recomended For</option>
                    <option value="Families &Senior Citizens">
                      Families and Senior Citizens
                    </option>
                    <option value="Wildlife Enthusiasts">
                      Wildlife Enthusiast
                    </option>
                    <option value="History Buffs & Solo Travelers">
                      History Buffs and Solo Travelers
                    </option>
                    <option value="Couples & Friends">Couples & Friends</option>
                    <option value="Adventure Seekers">Adventure Seekers</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              htmlFor="submit"
              className="btn btn-info btn-block Predict"
            >
              Suggest
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PlacesForm;
