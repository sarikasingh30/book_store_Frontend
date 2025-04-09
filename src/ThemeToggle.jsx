import React from "react";
import { IconButton } from "@mui/material";
import { useCustomTheme } from "./ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { motion } from "framer-motion";


const ThemeToggle = () => {
  const { toggleTheme, mode } = useCustomTheme();

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </motion.div>
  );
};

export default ThemeToggle;
