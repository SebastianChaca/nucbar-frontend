import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const fetchData = async (method, url, action, data) => {
    setLoading(true);
    try {
      const response = await axios({ method, url, data });
      if (action) {
        dispatch(action(response.data));
      }
      setResponse(response.data);
    } catch (error) {
      setError(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useFetch;
