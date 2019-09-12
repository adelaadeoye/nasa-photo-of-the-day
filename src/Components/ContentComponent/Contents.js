import React, { useState, useEffect } from "react";
import ContenHolder from "./ContentHolder";
import axios from "axios";


export default function Contents() {
  const [apod, setApod] = useState("");
  const [datePicker, setDate] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=WAIRagcNnvT7Z7JSy8E5V42RLRoO4rROeg7q6nVA${datePicker}`
      )
      .then(response => {
        const apod = response.data;
// setDate

        setApod(apod);
        const vari = document.querySelector("#start").nodeValue;
        console.log(vari);
      })
      .catch(error => {
        console.log("Sorry No picture of the Day or Api limit reached", error);
      });
  }, [datePicker]);

  return (
    <div>
      <h2>
        Let Me Waoh You With Nature... Today being {apod.date} or Choose a
        Different Date Below{" "}
      </h2>
      <input
        type="date"
        id="start"
        name="trip-start"
        min="2018-01-01"
        max="2020-12-31"
      ></input>
      <ContenHolder
        key={apod}
        title={apod.title}
        copyright={apod.copyright}
        date={apod.date}
        explanation={apod.explanation}
        img={apod.url}
      />
    </div>
  );
}
