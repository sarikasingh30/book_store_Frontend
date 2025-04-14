import axios from "axios";
import { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ start with true

  // Auth check
  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:3030/api/check-auth", {
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch (err) {
      if (err.response?.status !== 401) {
        console.error("Auth check failed:", err);
      }
      setUser(null); // No user
    } finally {
      setLoading(false);
    }
  };

  // On component mount
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
