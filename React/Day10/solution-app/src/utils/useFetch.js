import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  const callApi = async () => {
    try {
      let response = await fetch(url);
      let json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    callApi();
  }, []);
  return [data, loading, error];
}
