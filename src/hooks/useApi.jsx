import { useCallback, useEffect, useState } from "react"
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useApi = (params) => {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchApi = useCallback(async (params) => {
    try {
      const result = await axios.request(params);
      setData(result.data);
      } catch( error ) {
        setError(error);
      } 
  },[]);

  useEffect(() => {
    fetchApi(params);
  }, [params,fetchApi]);

  return { data, error }
};

export default useApi;