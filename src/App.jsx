import './App.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Countries from "./countries";
import Add from "./Add";
var App = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/country").then((res) => {
      setCountry(res.data);
      console.log(country);
    });
  }, []);

  return (
    <div>
      <h1></h1>
      <Countries country={country} />
      <Add />
    </div>
  );
};

export default App;