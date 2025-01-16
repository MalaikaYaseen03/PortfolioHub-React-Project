import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [fetchKey, setFetchKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      // set is pending to true when the data starts fetching
      setIsPending(true);

      try {
        const response = await axios.get(url, { signal, timeout: 10000 });

        setData(response.data); // Assign response data
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
  }, [url, fetchKey]);

  const refetch = () => setFetchKey((prevKey) => prevKey + 1);
  return { data, setData, error, isPending, refetch };
};

export default useFetch;
