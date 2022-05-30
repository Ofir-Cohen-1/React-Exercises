import React, { useEffect, useState } from "react";
import { API } from "../API";

function App() {
  const [ApiData, setApiData] = useState({});

  useEffect(() => {
    const rand = (Math.random() * 6 + 1) | 0;
    const getData = async () => {
      try {
        const { data } = await API.get(`/${rand}`);
        setApiData({
          title: data.title,
          director: data.director,
        });
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const getMovieData = () => {
    return (
      <>
        <div>
          <span>Name: </span>
          {ApiData.title}
        </div>
        <div>
          <span>Director: </span>
          {ApiData.director}
        </div>
      </>
    );
  };

  return <div>{getMovieData()}</div>;
}

export default App;
