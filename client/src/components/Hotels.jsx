import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Text } from "@nextui-org/react";
import * as geolib from "geolib";

const Hotels = (props) => {
  function roundDownTo100(number) {
    return Math.floor(number / 100) * 100;
  }
  const [hotels, setHotels] = useState([]);

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [bounds, setBounds] = useState({});
  const [bl_lat, setBl_lat] = useState();
  const [bl_lon, setBl_lon] = useState();
  const [tr_lat, setTr_lat] = useState();
  const [tr_lon, setTr_lon] = useState();

  function calculateBounds(lat, lng, radius) {
    // Convert radius to meters
    const radiusMeters = radius * 1000;

    // Calculate NE and SW coordinates
    const ne = geolib.computeDestinationPoint({ lat, lng }, radiusMeters, 45);
    const sw = geolib.computeDestinationPoint({ lat, lng }, radiusMeters, 225);

    // Return NE and SW coordinates as an object
    return {
      ne: { lat: ne.latitude, lng: ne.longitude },
      sw: { lat: sw.latitude, lng: sw.longitude },
    };
  }

  // const location = { lat: { lat }, lng: { lon } };
  const radius = 5; // km

  useEffect(() => {
    // places api/

    const placeOptions = {
      method: "GET",
      url: "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname",
      params: { name: "mumbai", country: "IN" },
      headers: {
        "X-RapidAPI-Key": "0681b53713msh82c649d91e80c7fp1b7c21jsn08cbeda673cd",
        "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com",
      },
    };

    axios
      .request(placeOptions)
      .then(function (response) {
        console.log(response.data);
        setLat(response.data.lat);
        setLon(response.data.lon);
        // console.log("set lat: ", lat, "\nset lon: ", lon);
        let temp = calculateBounds(lat, lon, radius);
        setBounds(temp);
        setBl_lat(temp.sw.lat);
        setBl_lon(temp.sw.lng);
        setTr_lat(temp.ne.lat);
        setTr_lon(temp.ne.lng);
      })
      .catch(function (error) {
        console.error(error);
      });

    console.log("bounds: ", bounds);
    console.log("NE: ", bounds.ne); // { lat: 37.79354396316508, lng: -122.39742973602258 }
    console.log("SW: ", bounds.sw); // { lat: 37.75625603683493, lng: -122.44137026397744 }

    console.log("bl_lat", bl_lat);
    console.log("bl_lon", bl_lon);
    console.log("tr_lat", tr_lat);
    console.log("tr_lon", tr_lon);

    const hotelOptions = bounds && {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary",
      params: {
        bl_latitude: bl_lat,
        bl_longitude: bl_lon,
        tr_longitude: tr_lat,
        tr_latitude: tr_lon,
        currency: "INR",
      },
      headers: {
        "X-RapidAPI-Key": "d79dd675bbmsh9ed3604b2d7463dp18bd61jsne3b6c39e66a8",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    hotelOptions.params.bl_latitude > 0 &&
      axios
        .request(hotelOptions)
        .then(function (response) {
          console.log("hotels", response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
  }, [lat, lon, bl_lat]);

  const hotelList = hotels.map((item) => (
    <>
      {/* <Card
        className="hotelcard"
        isPressable
        key={item.documentId}
        variant="shadow"
        isHoverable
      >
        <Card.Body css={{ p: 0 }}>
          {item.image && (
            <Card.Image
              className="hotelImg"
              src={item.image.urlTemplate
                .replace("{width}", "200")
                .replace("{height}", "200")}
              alt={item.title}
            />
          )}
          ;
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Text>{item.title}</Text>
          <Text
            css={{
              color: "$accents7",
              fontWeight: "$semibold",
              fontSize: "$sm",
            }}
          >
            {item.price}
          </Text>
        </Card.Footer>
      </Card> */}

      <Card
        css={{ w: "100%" }}
        isHoverable
        isPressable
        style={{ paddingTop: "1rem" }}
      >
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              Hotel
            </Text>
            <Text h4 color="white">
              {item.title}
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          className="hotelImg"
          src={item.image.urlTemplate
            .replace("{width}", `${roundDownTo100(item.image.maxWidth)}`)
            .replace("{height}", `${roundDownTo100(item.image.maxHeight)}`)}
          width="100%"
          height={340}
          objectFit="contain"
          alt="Card image background"
        />
      </Card>
    </>
  ));

  return <div style={{}}>{hotelList}</div>;
};

export default Hotels;
