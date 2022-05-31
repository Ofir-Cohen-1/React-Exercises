import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [data, setData] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.chucknorris.io/jokes/random",
          {
            signal: controller.signal,
          }
        );
        // console.log(data);
        setData(data.value);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
    return () => {
      controller.abort();
    };
  }, []);
  return <div>{data}</div>;
}

export default FetchData;
