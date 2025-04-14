import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Box, CircularProgress } from "@mui/material";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Box display="flex" justifyContent="center" alignItems="center" py={4}>
      <CircularProgress size={40} />
    </Box>
  return user ? children : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return  <Box display="flex" justifyContent="center" alignItems="center" py={4}>
  <CircularProgress size={40} />
</Box>
  return user ? <Navigate to="/" /> : children;
};
