import React from "react";
import { Typography, Box } from "@mui/material";

import { motion } from "framer-motion";
import AIRobo from "../../assets/aiSummary.png";
export default function AIModel() {
  return (
    <>
      <Box display={{ xs: "none", md: "flex" }}>
        <motion.div
          initial={{ opacity: 1, x: 0, y: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            x: [0, 100, 200, 0],
            y: [0, -100, -200, -100],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Box
            sx={{
              background: "white",
              borderRadius: "10px",
              px: 2,
              py: 1,
              boxShadow: 3,
              width: "200",
              mr: 2,
            }}
          >
            <Typography variant="body1" color="black" fontWeight="500">
              Decision Lena Mushkil Lag Raha Hai..?😕
            </Typography>
            <Typography variant="body1" color="black" fontWeight="500">
              Main Hoon Na.. 😎📚
            </Typography>
          </Box>
          <img
            src={AIRobo}
            alt="Character"
            style={{
              width: "250px",
              height: "250px",
              position: "absolute",
              zIndex: 1,
            }}
          />
        </motion.div>
      </Box>
    </>
  );
}
