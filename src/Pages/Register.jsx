// // src/pages/Register.jsx
import { useState, useContext, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,

  Stack,
  CircularProgress,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const Register = () => {
//   const { user, setUser, loading } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // ✅ Redirect if already logged in
//   useEffect(() => {
//     if (!loading && user) {
//       navigate("/");
//     }
//   }, [user, loading, navigate]);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "https://book-store-ozfo.onrender.com/register",
//         { username, email, password },
//         { withCredentials: true }
//       );
//       setUser(res.data.user);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       alert("Registration failed. Please try again.");
//     }
//   };

//   if (loading) return <CircularProgress />;

//   return (
//     <Container maxWidth="xs" sx={{ my: 10 }}>
//       <motion.div
//         initial={{ opacity: 0, y: -60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ type: "spring", stiffness: 80, damping: 10 }}
//       >
//         <Paper
//           elevation={6}
//           sx={{
//             p: 3,
//             borderRadius: 4,
//             background: (theme) =>
//               theme.palette.mode === "dark"
//                 ? "linear-gradient(35deg, rgb(101, 102, 103), #1a1a1a)"
//                 : "linear-gradient(135deg, #f8f9fa, rgb(126, 173, 244))",
//             boxShadow: "0px 4px 30px rgba(0,0,0,0.15)",
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <Typography
//               variant="h5"
//               align="center"
//               sx={{
//                 fontWeight: "bold",
//                 mb: 3,
//                 color: (theme) =>
//                   theme.palette.mode === "dark" ? "#fff" : "#303f9f",
//               }}
//             >
//               📚 Let’s Get You Registered!
//             </Typography>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <form onSubmit={handleRegister}>
//                   <TextField
//                     label="Username"
//                     type="text"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     required
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                   <TextField
//                     label="Email"
//                     type="email"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <TextField
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//                     Register
//                   </Button>
//                 </form>
//               </motion.div>
//             </AnimatePresence>

//             {/* Toggle Button */}
//             <Stack direction="row" justifyContent="center" mt={3}>
//               <Typography variant="body2">Already have an account?</Typography>
//               <motion.div whileTap={{ scale: 0.9 }}>
//                 <Button
//                   size="medium"
//                   variant="outlined"
//                   sx={{
//                     ml: 1,
//                     textTransform: "none",
//                     color: (theme) =>
//                       theme.palette.mode === "dark" ? "white" : "black",
//                   }}
//                   onClick={() => navigate("/login")}
//                 >
//                   Login
//                 </Button>
//               </motion.div>
//             </Stack>
//           </motion.div>
//         </Paper>
//       </motion.div>
//     </Container>
//   );
// };

// export default Register;
const Register = () => {
  const { user, setUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://book-store-t37x.onrender.com/register",
        { username, email, password },
        { withCredentials: true }
      );
      setUser(res.data.user);
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please try again."); // Set error message
    }
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
              📚 Let’s Get You Registered!
            </Typography>

            {error && (
              <Typography color="error" variant="body2" align="center" mb={2}>
                {error}
              </Typography>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleRegister}>
                  <TextField
                    label="Username"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
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
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                    Register
                  </Button>
                </form>
              </motion.div>
            </AnimatePresence>

            {/* Toggle Button */}
            <Stack direction="row" justifyContent="center" mt={3}>
              <Typography variant="body2">Already have an account?</Typography>
              <motion.div whileTap={{ scale: 0.9 }}>
                <Button
                  size="medium"
                  variant="outlined"
                  sx={{
                    ml: 1,
                    textTransform: "none",
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "black",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Register;
