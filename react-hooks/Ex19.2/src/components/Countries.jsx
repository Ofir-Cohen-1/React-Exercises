import React, { useEffect, useState } from "react";
import { API } from "../API";

function App() {
  const [countries, setCountries] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      try {
        const { data } = await API.get("/all");
        setCountries(
          data.map((country) => {
            return country.name.common;
          })
        );
      } catch (err) {
        console.log(err);
      }
    };

    getCountries();
  }, []);

  const getFiltered = () => {
    const filtered = countries.filter((country) => {
      return country.toLowerCase().includes(term.toLowerCase());
    });
    return getCountriesJSX(filtered);
  };

  const getCountriesJSX = (filtered) => {
    return (
      <ul>
        {filtered.map((country) => {
          return <li key={country}>{country}</li>;
        })}
      </ul>
    );
  };
  return (
    <div className="container">
      <div className="inputSearch">
        Filter Countries:{" "}
        <input onChange={(e) => setTerm(e.target.value)} value={term} />
      </div>
      <div className="theList">{getFiltered()}</div>
    </div>
  );
}

export default App;
