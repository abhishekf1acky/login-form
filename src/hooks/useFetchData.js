import { useState } from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url, method = 'GET', headers = {}, body = null) => {
    setData(null);
    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post(url, body, {
        headers,
      });

      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(error);
    }

    setIsLoading(false);
  };

  return { data, error, isLoading, fetchData };
};

export default useFetchData;
