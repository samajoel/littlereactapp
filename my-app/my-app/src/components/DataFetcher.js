import React, { useEffect } from "react";

export default function DataFetcher({ onDataFetched }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/ironhack-labs/lab-thinking-in-react/master/src/data.json"
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        onDataFetched(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [onDataFetched]);

  return <div>Loading...</div>;
}
