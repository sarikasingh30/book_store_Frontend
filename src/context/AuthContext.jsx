
import axios from "axios";
import { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ start with true
  const [refreshCounts, setRefreshCounts] = useState(false); 

  const [errorMessage, setErrorMessage] = useState(""); // To hold error message

  // Auth check
  const checkAuth = async () => {
    try {
      const res = await axios.get("https://book-store-t37x.onrender.com/api/check-auth", {
        withCredentials: true,
      });
      console.log("res check",res,res.data.user)
      setUser(res.data.user);
    } catch (err) {
      if (err.response?.status !== 401) {
        console.error("Auth check failed:", err);
      }
      setUser(null); // No user
      setErrorMessage("Failed to authenticate. Please log in.");
    } finally {
      setLoading(false);
    }
  };

  // On component mount
  useEffect(() => {
    checkAuth();
  }, [setUser]);

  // If loading, show loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, loading, errorMessage,refreshCounts,setRefreshCounts}}>
      {children}
    </AuthContext.Provider>
  );
};

