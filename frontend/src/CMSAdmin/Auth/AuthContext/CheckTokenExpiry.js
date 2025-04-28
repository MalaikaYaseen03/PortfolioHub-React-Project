export const isTokenExpired = (token) => {
  if (token) {
    try {
      const tokenPayload = JSON.parse(atob(token.split(".")[1]));
      const expiry = tokenPayload.exp * 1000;
      return Date.now() > expiry;
    } catch (error) {
      console.error("Failed to decode the token:", error.message);
    }
  }
  return true; // Default to true if no token
};
