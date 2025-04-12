

import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aanya Sharma",
    quote: "Found my favorite book in minutes!",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    quote: "The AI suggestions were surprisingly accurate!",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4,
  },
  {
    name: "Simran Kaur",
    quote: "Loved the fast delivery and recommendations!",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const floatAnim = {
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ReaderReviews = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: 10,
        background:(theme) =>
                    theme.palette.mode === "dark" ? "radial-gradient(circle, rgba(252,242,247,1) 0%, rgba(202,202,201,0.6862394616049545) 94%)" : "radial-gradient(circle, rgba(251,199,222,1) 0%, rgba(144,195,255,0.6862394616049545) 100%)",
                
                  color: "black",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={6}
        sx={{
          color: "#4b2e2e",
        }}
      >
        📝 Reader Reviews 📚
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          scrollSnapType: "x mandatory",
          overflowX: { xs: "scroll", md: "visible" },
          px: 1,
        }}
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.07, boxShadow:(theme) =>
              theme.palette.mode === "dark" ? "0 8px 30px rgba(168, 165, 165, 0.2)" : "0 8px 30px rgba(218, 6, 186, 0.2)",
            }}
            {...floatAnim}
            style={{
              scrollSnapAlign: "start",
              minWidth: 280,
              maxWidth: 300,
            }}
          >
            <Card
              sx={{
                minHeight: 270,
                p: 3,
                borderRadius: 4,
                background:
                  "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,240,230,0.95))",
                border: "2px solid transparent",
                backgroundClip: "padding-box",
                position: "relative",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor:(theme) =>
                    theme.palette.mode === "dark" ? "rgba(77, 74, 74, 0.2)" : "rgba(236, 9, 202, 0.2)",
                },
              }}
            >
              <CardContent>
                <Avatar
                  src={item.avatar}
                  alt={item.name}
                  sx={{
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 2,
                    border: "3px solid #fff",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: "#333",
                    mb: 2,
                  }}
                >
                  “{item.quote}”
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  fontWeight="medium"
                >
                  — {item.name}
                </Typography>
                <Rating
                  value={item.rating}
                  readOnly
                  size="small"
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default ReaderReviews;
