import React,{useState,useEffect}from "react";
import ContenHolder from "./ContentHolder";
import axios from "axios";


export default function Contents() {
    const [apod, setApod] = useState("");
  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
          const apod = response.data;
          console.log(apod.copyright);
            
          setApod(apod);
        console.log(response);
        })
        .catch(error => {
          console.log("Sorry No picture of the Day", error);
        });
    }, "");

    return( <ContenHolder key={apod} title={apod.title} copyright={apod.copyright} date={apod.date} explanation={apod.explanation} img={apod.url}/>)
    
  }