import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Date() {
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=QKZxF7EJtXciLGquKSxKFL8Fi5h12DptItoh7KiC"
      )
      .then((response) => {
        setDate(response.data.date);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div className="DateContainer">
      <h2>{date}</h2>
    </div>
  );
}
