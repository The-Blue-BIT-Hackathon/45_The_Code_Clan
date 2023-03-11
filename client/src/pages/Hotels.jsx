import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Text } from "@nextui-org/react";

const Hotels = (props) => {
  function roundDownTo100(number) {
    return Math.floor(number / 100) * 100;
  }
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation",
      params: { query: "mumbai" },
      headers: {
        "X-RapidAPI-Key": "0681b53713msh82c649d91e80c7fp1b7c21jsn08cbeda673cd",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        const filteredHotels = response.data.data.filter(
          (item) => item.trackingItems === "hotel"
        );
        setHotels(filteredHotels);
      })
      .catch((error) => console.error(error));
  }, []);

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
