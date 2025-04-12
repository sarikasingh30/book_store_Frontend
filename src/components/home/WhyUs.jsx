import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Lightbulb, Inventory2, Favorite } from "@mui/icons-material";

const features = [
  {
    icon: <Lightbulb fontSize="large" sx={{color:(theme)=>theme.palette.mode === "dark"?"#fff":"#303f9f"}} />,
    title: "AI Suggestions",
    description: "Get book recommendations tailored to your taste using AI magic.",
  },
  {
    icon: <Inventory2 fontSize="large"  sx={{color:(theme)=>theme.palette.mode === "dark"?"#fff":"#303f9f"}}/>,
    title: "Local Inventory",
    description: "Check what's available in your nearby Baba Book Store instantly.",
  },
  {
    icon: <Favorite fontSize="large"  sx={{color:(theme)=>theme.palette.mode === "dark"?"#fff":"#303f9f"}}/>,
    title: "Made with Love",
    description: "Curated collections and support from passionate book lovers ❤️.",
  },
];

const MotionPaper =motion.create(Paper)

const WhyUs = () => {
  return (
    <Box sx={{ px: 4, py: 8, bgcolor: "#f5f5f5" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={5}
        textAlign="center"
        color="primary"
      >
       ❓Why Us 📚
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionPaper
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              elevation={4}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyUs;
