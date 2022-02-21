import { useCallback, useEffect, useState } from "react";
import axios from 'axios';

// axios.defaults.baseURL = 'https://api.mockaroo.com/api/08100050?count=1000&key=3e2ade60';

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