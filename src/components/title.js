import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
    color: #005f73;
}
`;

//Title animation
const Title = styled.h1`
  opacity: 0%;
  transform: scale(3) rotateZ(180deg);
  animation: ${kf} 2s ease-in forwards;
  color: #14213d;
  font-size: 25px;
`;

export default function TitleDiv() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=idCmeTxx9XTTSyRGcclgPRRdb2q7wr4kbR70ATXg"
      )
      .then((response) => {
        setTitle(response.data.title);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div className="TitleContainer">
      <Title>
        <h1>{title}</h1>
      </Title>
    </div>
  );
}
