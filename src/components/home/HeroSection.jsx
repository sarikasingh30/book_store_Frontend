import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logomine from "../../assets/bookStore-logo.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        p:4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "radial-gradient(circle, rgba(252,242,247,1) 0%, rgba(202,202,201,0.6862394616049545) 94%)"
            : "radial-gradient(circle, rgba(251,199,222,1) 0%, rgba(144,195,255,0.6862394616049545) 100%)",

        color: "black",
      }}
    >
      <motion.img
        drag
        whileDrag={{ scale: 0.8 }}
        dragConstraints={{ left: 0, right: 100, top: 0, bottom: 100 }}
        src={logomine}
        alt="logo"
        style={{ width: "150px", height: "150px", borderRadius: "10%" }}
        sx={{ my: 4 ,p:3}}
      />

      <Typography
        variant="h2"
        component={motion.h1}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        sx={{ mb: 1, fontWeight: "bold" }}
      >
        Baba Book Store
      </Typography>

      <Typography
        variant="h5"
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        sx={{ mb:2}}
      >
        Discover books that match your mood 💡📚
      </Typography>

      <Box display="flex" gap={2} p={4}>
        <Button
          variant="contained"
          color="primary"
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/books")}
        >
          Explore Books
        </Button>

        <Button
          variant="contained"
          color="primary"
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/mood-suggestion")}
        >
          Suggest by Mood
        </Button>
      </Box>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "black" : "#303f9f",
            fontWeight: "bold", p:3
          }}
        >
          ✨ Jahan har reader ke liye ek kahani hai... aur har kahani ke liye ek
          reader. ✨
        </Typography>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
