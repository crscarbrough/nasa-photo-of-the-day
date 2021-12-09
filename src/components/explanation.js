import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
0% {
  color: 001219#;
}
50% {
  color: #005f73;
}
100% {
  color: #001219;
}
`;

const Paragraph = styled.p`
  font-family: "Arial";
  animation: ${kf} 6.5s infinite;
  text-align: center;
  max-width: 100%;
  margin-right: 20%;
  margin-left: 20%;
`;

export default function Explanation() {
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=QKZxF7EJtXciLGquKSxKFL8Fi5h12DptItoh7KiC"
      )
      .then((response) => {
        setExplanation(response.data.explanation);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div className="ExplanationContainer">
      <Paragraph>
        <p>{explanation}</p>
      </Paragraph>
    </div>
  );
}
