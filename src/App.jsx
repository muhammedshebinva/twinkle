import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TitleTable from './TitleTable';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your JSON file path or URL
  const source = 'https://jsonplaceholder.typicode.com/posts'; // For a JSON file
  // const source = 'https://your-json-api.com/data'; // For a JSON URL

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(source);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [source]);

  return (
    <div className="App">
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && <TitleTable titles={data} />}
    </div>
  );
};

export default App;
