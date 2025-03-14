import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSignup = (newUser, authentication) => {
    setUser(newUser);
    setIsAuthenticated(authentication);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const onLogin = (loggedInUser, token, authentication) => {
    setUser(loggedInUser);
    setIsAuthenticated(authentication);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    localStorage.setItem("token", token);
    localStorage.setItem("userId", loggedInUser._id);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
    setIsLoading(false); // Set loading to false after check
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        onSignup,
        onLogin,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
