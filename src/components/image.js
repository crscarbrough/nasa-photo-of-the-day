import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Image() {
  const Image = styled.img`
    border-radius: 15px;
    max-height: 40vh;
    padding: 2px;
    border: 5px solid #005f73;
  `;
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=idCmeTxx9XTTSyRGcclgPRRdb2q7wr4kbR70ATXg"
      )
      .then((response) => {
        setImage(response.data.url);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div className="ImageContainer">
      <Image src={image} alt="the image is missing!" />
    </div>
  );
}
