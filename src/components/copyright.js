import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Copyright() {
  const [copyright, setCopyright] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=QKZxF7EJtXciLGquKSxKFL8Fi5h12DptItoh7KiC"
      )
      .then((response) => {
        setCopyright(response.data.copyright);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div className="Copyright">
      <h3>{copyright}</h3>
    </div>
  );
}
