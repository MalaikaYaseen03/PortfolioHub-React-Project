import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { isTokenExpired } from "./CheckTokenExpiry";
import { toast } from "react-toastify";
import { auth } from "../../../Config/FirebaseConfig";
import { signOut } from "firebase/auth";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";

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

  // Logout Function
  const onLogout = useCallback(async () => {
    const token = localStorage.getItem("token");

    // checking if the token is expired
    if (token && isTokenExpired(token)) {
      console.log("Token expired. Logging out.");
      // Clear user session
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      // localStorage.removeItem("userId");
      toast.info("Session expired. Logged out automatically.");
      // signing out from the firebase as well
      await signOut(auth);
      return;
    }

    // Proceed with backend logout if the token is valid
    if (token) {
      try {
        const response = await fetch(`${API_URL}/api/v1/auth/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // if the response is on, setting the states
        if (response.ok) {
          setUser(null);
          setIsAuthenticated(false);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          // localStorage.removeItem("userId");
          toast.success("Logged out successfully!");
        } else {
          toast.error("Failed to log out. Please try again.");
        }
      } catch (error) {
        console.error("Error during logout:", error);
        toast.error("Error logging out. Please try again.");
      }
    }
  }, [API_URL]);

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
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
