import { useState, useEffect } from "react";
import { API } from "../API";

function Algolia() {
  const [data, setData] = useState([]);
  const [isSpinning, setIsSpinning] = useState(true);
  const [inputQuery, setInputQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = async (term) => {
    try {
      const { data } = await API.get(`${term}`);
      const filterData = data.hits.map((hit) => hit.title);
      setData(filterData);
    } catch (e) {
      console.log(e.message);
      setErrorMessage(e.message);
    }
    setIsSpinning(false);
  };

  useEffect(() => {
    fetchData("hooks");
  }, []);

  const insertData = () => {
    return data.map((str) => (
      <p style={{ fontSize: "12px", lineHeight: "0.5" }} key={str}>
        {str}
      </p>
    ));
  };

  const handleChange = ({ target: { value } }) => {
    setInputQuery(value);
  };
  const handleClick = () => {
    fetchData(inputQuery);
  };
  return (
    <div>
      <input placeholder="Query" value={inputQuery} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      {isSpinning && <h1>Spinner</h1>}
      {insertData()}
      {errorMessage && <h2>{errorMessage}</h2>}
    </div>
  );
}

export default Algolia;
