import React from "react";
import "./style/placeForm.css"
const PlacesForm = () => {
  return <>
  <section className="mainSection">
    
    <div className="placeForm text-center">
      <div className="form-heading ">"PLAN,PREPARE,PROCEED WITH YOUR TRAVEL DREAMS"</div>

      <form className="form-structure ">
    <div className="row r1">
        <div className="col">
            <div className="form-outline"> 
            {/* <label  className="form-label">Desitination district</label> */}
            <select id="inputState" htmlFor="district" className="form-control text-center">
              <option selected disabled>Desitination district</option>
              <option>Akola</option>
              <option>Ahmednagar</option>
              <option>Amravati</option>
              <option>Sambhaji Nagar</option>
              <option>Beed</option>
              <option>Bhandara</option>
              <option>Buldhana</option>
              <option>Chandrapur</option>
              <option>Dhule</option>
              <option>Gadchiroli</option>
              <option>Gondia</option>
              <option>Hingoli</option>
              <option>Jalgaon</option>
              <option>Jalna</option>
              <option>Kolhapur</option>
              <option>Latur</option>
              <option>Mumbai</option>
              <option>Nagpur</option>
              <option>Nandurbar</option>
              <option>Nashik</option>
              <option>Nanded</option>
              <option>Osmanabad</option>
              <option>Parbhani</option>
              <option>Pune</option>
              <option>Raigad</option>
              <option>Ratnagiri</option>
              <option>Sangli</option>
              <option>Satara</option>
              <option>Sindhudurg</option>
              <option>Solapur</option>
              <option>Thane</option>
              <option>Wardha</option>
              <option>Yavatmal</option>
            </select>

            </div>
        </div>
        <div className="col">
            <div className="form-outline">
            {/* <label  className="form-label">Region</label> */}
            <select id="inputState" htmlFor="region" className="form-control text-center">
              <option selected disabled>Region</option>
              <option>Northern Maharastra</option>
              <option>Vidharbha</option>
              <option>Marathwada</option>
              <option>Western Maharastra</option>
              <option>Kokan</option>
            </select>
            </div>
        </div>
        <div className="col">
            <div className="form-outline">
            {/* <label  className="form-label">Budget Range</label> */}
            <select id="inputState" htmlFor="range" className="form-control text-center">
              <option selected disabled>Budget Range</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            </div>
        </div>
    </div>

    <div className="row r2">
        <div className="col">
        <div className="form-outline">
            {/* <label  className="form-label">Activities to Perform</label> */}
            <select id="inputState" htmlFor="activities" className="form-control text-center">
              <option selected disabled>Activities to Perform</option>
               <option value="">Religious Tourism </option>
               <option value="">Wildlife Safari,Bird Watching </option>
               <option value="">Trekking, Sightseeing </option>
               <option value="">Trekking, Waterfalls, Caves </option>
               <option value="">Heritage Tourism, Caves </option>
               <option value="">Heritage Tourism, Sightseeing </option>
               <option value="">Trekking, Wildlife Sanctuary </option>
               <option value="">Trekking,Sightseeing </option>
               <option value="">Sightseeing </option>
               <option value="">Beach,  Water Sports </option>
               <option value="">Science </option>
               <option value="">Sightseeing,water sports </option>
               <option value="">Water Sports, Fort </option>
               <option value="">Hill Station </option>
               <option value="">Beach, Water Sports </option>
               <option value="">Aashram </option>
            </select>
            </div>
        </div>

        <div className="col">
        <div className="form-outline">
            {/* <label  className="form-label">Recomended For</label> */}
            <select id="inputState"  htmlFor="recommendedFor" className="form-control text-center">
              <option selected disabled>Recomended For</option>
              <option>Families and Senior Citizens</option>
              <option>Wildlife Enthusiast</option>
              <option>History Buffs and Solo Travelers</option>
              <option>Couples & Friends</option>
              <option>Wildlife Enthusiasts', 'Families  &Senior Citizens</option>
              <option>Adventure Seekers</option>
            </select>
            </div>
        </div>
    </div>

   
    <button type="submit" htmlFor="submit" className="btn btn-info btn-block Predict">Suggest</button>

</form>
    </div>

  </section>
  </>;
};

export default PlacesForm;
