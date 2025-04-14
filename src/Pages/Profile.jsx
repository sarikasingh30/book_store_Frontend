
    import React, { useContext } from "react";
    import { Avatar, Box, Grid, Paper, Typography, Chip } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import userIcon from "../assets/usericon.webp"
    import { motion } from "framer-motion";
    import { Google, Lock } from "@mui/icons-material";
    
    // Framer Motion wrapper
    const MotionPaper = motion.create(Paper);
    
    const Profile = () => {
    const {user} = useContext(AuthContext);

      return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="90vh"
            
            px={2}
            sx={{background: (theme) =>
              theme.palette.mode === "dark"
                ? "radial-gradient(circle, rgba(252,242,247,1) 0%, rgba(202,202,201,0.6862394616049545) 94%)"
                : "radial-gradient(circle, rgba(251,199,222,1) 0%, rgba(144,195,255,0.6862394616049545) 100%)",
    
            color: "black",}}
          >
            <MotionPaper
              elevation={6}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              sx={{
                maxWidth: 450,
                width: "100%",
                p: 4,
                borderRadius: 4,
                textAlign: "center",
                
              }}
            >
              <Avatar
                src={userIcon}
                alt={user?.username}
                sx={{ width: 150, height: 150, mx: "auto", mb: 2 }}
              />
      
              <Typography variant="h5" fontWeight={600} sx={{color:(theme) =>
              theme.palette.mode === "dark"?"white":"black"}}>
                Username : {user?.username||"User"}
              </Typography>
      
              <Typography variant="body1" color="text.secondary" mb={1}>
                Email : {user?.email}
              </Typography>
      
              <Chip
                icon={user?.provider === "google" ? <Google /> : <Lock />}
                label={
                  user?.provider === "google"
                    ? "Logged in via Google"
                    : "Logged in via Local"
                }
                color={user?.provider === "google" ? "green" : "blue"}
                variant="outlined"
                sx={{ mb: 3 }}
              />
      
            </MotionPaper>
          </Box>)}
    
    
    export default Profile;
    