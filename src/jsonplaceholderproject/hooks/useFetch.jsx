import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL + url)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, [url]);
  return [data, loading];
};

export default useFetch;
