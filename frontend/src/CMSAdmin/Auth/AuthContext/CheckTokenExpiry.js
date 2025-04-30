// function to check if the token is expired or not
export const isTokenExpired = (token) => {
  // if token is valid
  if (token) {
    try {
      // decoding  the token and check teh expiry
      const tokenPayload = JSON.parse(atob(token.split(".")[1]));
      const expiry = tokenPayload.exp * 1000;
      // Comaring the current data and expiry
      return Date.now() > expiry;
    } catch (error) {
      console.error("Failed to decode the token:", error.message);
    }
  }
  return true; // Default to true if no token
};
