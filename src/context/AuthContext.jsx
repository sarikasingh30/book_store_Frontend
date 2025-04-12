import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3030/api/check-auth")
      .then((res) => {console.log(res)
        setAuth(res.data.authenticated)})
      .catch(() => setAuth(false))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
