// Work is done when dynamic data is fetched
import "./App.css";
import { useEffect, useState } from "react";
import axios, { getApiData } from "./axios";
// Note Step 3 Best practice
const API = "https://jsonplaceholder.typicode.com";
//
//
//
//
//
function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  //
  //
  //
  //
  // Notes: Step 1  Using Promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch(
  //       (error) => setIsError(error.message) // Errror handling
  //     );
  //   //   console.log("file: App.jsx line 13 useEffect res", res.data)
  //   // );
  // }, []); // we have use affect and dependency arrary
  //
  //
  //
  //
  //
  //
  // Note: Step 2 Using  Asynchronous await
  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setMyData(res.data);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };
  // useEffect(() => {
  //   getApiData();
  // }, []);
  //
  //
  //
  // Note Step 3 Best practice
  const getData = async () => {
    const res = await getApiData();
    if (res.status >= 400) {
      setIsError(res.data?.message ?? "Error fetching");
    } else {
      setIsError();
      setMyData(res.data);
    }
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1> Axios Tuotorial</h1>
      {isError != "" && <h2>{isError}</h2>}
      <div className="grid">
        {myData?.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
