import React from "react";
import "./App.css";
import TitleDiv from "./components/title.js";
import Copyright from "./components/copyright.js";
import Image from "./components/image.js";
import Date from "./components/date.js";
import Explanation from "./components/explanation.js";
import styled, { keyframes } from "styled-components";

//Order of elements
function App() {
  return (
    <div className="App">
      <BodyStyle>
        <TitleDiv />
        <Image />
        <Date />
        <Explanation />
        <Copyright />
      </BodyStyle>
    </div>
  );
}

//background animation
const kf = keyframes`
0% {
  background-color: #a4b8c4;
}
50% {
  background-color: #bdb2ff;
}
100% {
  background-color: #a4b8c4;
}
`;

const BodyStyle = styled.body`
  animation: ${kf} 7.5s infinite;
  padding: 20px;
  margin-top: 8px;
`;

export default App;
