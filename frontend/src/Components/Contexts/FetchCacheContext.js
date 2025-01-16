import { createContext, useContext, useState } from "react";

const FetchCacheContext = createContext();

export const FetchCacheProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const getCachedData = (key) => cache[key];

  const setCachedData = (key, data) => {
    setCache((prevCache) => ({ ...prevCache, [key]: data }));
  };

  return (
    <FetchCacheContext.Provider value={{ getCachedData, setCachedData }}>
      {children}
    </FetchCacheContext.Provider>
  );
};

export const useFetchCache = () => useContext(FetchCacheContext);
