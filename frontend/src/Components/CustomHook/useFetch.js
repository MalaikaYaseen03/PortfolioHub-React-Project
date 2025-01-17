import axios from "axios";
import { useEffect, useState } from "react";
import { useFetchCache } from "../Contexts/FetchCacheContext";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [fetchKey, setFetchKey] = useState(0);

  const { getCachedData, setCachedData } = useFetchCache();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      // set is pending to true when the data starts fetching
      setIsPending(true);

      try {
        // Check if data is already cached in global state
        const cachedData = getCachedData(url);
        if (cachedData) {
          setData(cachedData);
          setIsPending(false);
          setError(null);
          return;
        }

        // Fetch data if not cached
        const response = await axios.get(url, { signal, timeout: 10000 });
        const result = response.data;

        // Cache the response in global state
        setCachedData(url, result);
        setData(result); // Assign response data
        setError(null); // Clear error state on success
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Fetch aborted");
        } else {
          setError(error.message); // Set error message
        }
      } finally {
        setIsPending(false); // Reset loading state
      }
    };
    fetchData();

    // Cleanup function to abort the fetch if the component unmounts or if url changes
    return () => controller.abort();
  }, [url, fetchKey, getCachedData, setCachedData]);

  const refetch = () => {
    setCachedData(url, null); // Clear the cache for the URL
    setFetchKey((prevKey) => prevKey + 1); // Trigger a re-fetch
  };
  return { data, setData, error, isPending, refetch };
};

export default useFetch;
