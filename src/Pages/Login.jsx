// src/pages/Login.jsx
import { useState, useContext, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Divider,
  Stack,
  CircularProgress,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { user, setUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://book-store-ozfo.onrender.com/login", {
        email,
        password,
      }, {
        withCredentials: true,
      });
      setUser(res.data.user);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  const handleGoogleLogin = () => {
    window.open("https://book-store-ozfo.onrender.com/login/google", "_self");
  };

  if (loading) return <CircularProgress />;
  return (
    <Container maxWidth="xs" sx={{ my: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 3,
            borderRadius: 4,
            background: (theme) =>
              theme.palette.mode === "dark"
                ? "linear-gradient(35deg, rgb(101, 102, 103), #1a1a1a)"
                : "linear-gradient(135deg, #f8f9fa, rgb(126, 173, 244))",
            boxShadow: "0px 4px 30px rgba(0,0,0,0.15)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: (theme) =>
                  theme.palette.mode === "dark" ? "#fff" : "#303f9f",
              }}
            >
              ✨The Library Missed You!😄
            </Typography>

            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleLogin}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    sx={{color: (theme) =>
                      theme.palette.mode === "dark" ? "#fff" : "#303f9f",}}
                    fullWidth
                    margin="normal"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{color: (theme) =>
                      theme.palette.mode === "dark" ? "#fff" : "#303f9f",}}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                    Login
                  </Button>
                </form>
              </motion.div>
            </AnimatePresence>

            <Divider sx={{ my: 3 }}>OR</Divider>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleGoogleLogin}
                sx={{
                  background: "#DB4437",
                  color: "white",
                  fontWeight: 600,
                  ":hover": { background: "#ff0000" },
                }}
              >
                Login with Google
              </Button>
            </motion.div>

            {/* Toggle Button */}
            <Stack direction="row" justifyContent="center" mt={3}>
              <Typography variant="body2">Don't have an account?</Typography>
              <motion.div whileTap={{ scale: 0.9 }}>
                <Button
                  size="medium"
                  variant="outlined"
                  onClick={() => navigate("/register")}
                  sx={{
                    ml: 1,
                    textTransform: "none",
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "black",
                  }}
                >
                  Register
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Login;
