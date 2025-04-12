

















































// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Paper,
//   Typography,
//   Button,
//   Divider,
//   Stack,
//   Box,
//   CircularProgress,
// } from "@mui/material";
// import Login from "../components/auth/Login";
// import Register from "../components/auth/Register";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   // ✅ Check auth via cookie-based API
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const res = await axios.get("http://localhost:3030/api/check-auth", {
//           withCredentials: true,
//         });

//         if (res.data.authenticated) {
//           navigate("/"); // Already logged in
//           setIsLogin(true)
//         } else {
//           setLoading(false); // Show login/register
//         }
//       } catch (err) {
//         console.error("Auth check failed:", err.message);
//         setLoading(false); // Show login/register even on failure
//       }
//     };

//     checkAuth();
//   }, [navigate]);

//   // 🔐 Handle Google login redirect + refresh
//   const handleGoogleLogin = () => {
//     const googleWindow = window.open(
//       "http://localhost:3030/login/google",
//       "_self"
//     );

//     const timer = setInterval(() => {
//             if (googleWindow.closed) {
//               clearInterval(timer);
//               window.location.reload();
//             }
//           }, 1000);
//   };

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <CircularProgress size={60} thickness={4.5} />
//       </Box>
//     );
//   }

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
//               {isLogin
//                 ? "✨The Library Missed You!😄"
//                 : "✨Join the World of Stories!📚"}
//             </Typography>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={isLogin ? "login" : "register"}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {isLogin ? <Login /> : <Register />}
//               </motion.div>
//             </AnimatePresence>

//             {/* OR Divider & Google Login */}
//             {isLogin && (
//               <>
//                 <Divider sx={{ my: 3 }}>OR</Divider>
//                 <motion.div
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     onClick={handleGoogleLogin}
//                     sx={{
//                       background: "#DB4437",
//                       color: "white",
//                       fontWeight: 600,
//                       ":hover": { background: "#ff0000" },
//                     }}
//                   >
//                     Login with Google
//                   </Button>
//                 </motion.div>
//               </>
//             )}

//             {/* Toggle Button */}
//             <Stack direction="row" justifyContent="center" mt={3}>
//               <Typography variant="body2">
//                 {isLogin
//                   ? "Don't have an account?"
//                   : "Already have an account?"}
//               </Typography>
//               <motion.div whileTap={{ scale: 0.9 }}>
//                 <Button
//                   onClick={() => setIsLogin((prev) => !prev)}
//                   size="medium"
//                   variant="outlined"
//                   sx={{
//                     ml: 1,
//                     textTransform: "none",
//                     color: (theme) =>
//                       theme.palette.mode === "dark" ? "white" : "black",
//                   }}
//                 >
//                   {isLogin ? "Register" : "Login"}
//                 </Button>
//               </motion.div>
//             </Stack>
//           </motion.div>
//         </Paper>
//       </motion.div>
//     </Container>
//   );
// };

// export default AuthPage;
