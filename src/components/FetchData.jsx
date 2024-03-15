import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const FetchData = () => {
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch("https://jsonplaceholder.org/users");
  //       const result = await response.json();
  //       console.log(result);
  //       setData(result);
  //     };

  //     fetchData();
  //     return () => {};
  //   }, []);

  const [data] = useFetch("https://jsonplaceholder.org/users");

  return (
    <div>
      <h1>useEffect</h1>
      {data ? (
        <div>
          <p>Data:</p>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.firstname}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchData;
