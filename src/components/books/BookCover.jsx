import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function BookCover({ imgUrl, title }) {
  return (
    <Box
      mt={2}
      width={{ xs: "100%", sm: "70%", md: "40%" }}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
        },
        background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
        backdropFilter: "blur(10px)",
      }}
    >
      <motion.img
        src={imgUrl}
        alt={title}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          width: "100%",
          // height: "100%",
          objectFit: "cover",
          borderRadius: "20px",
          transition: "transform 0.3s ease-in-out",
        }}
        whileHover={{ scale: 1.05 }}
      />
    </Box>
  );
}
