import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const sampleBooks = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image:
      "https://images.unsplash.com/photo-1588776814546-d4f5e5db5f37?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    image:
      "https://images.unsplash.com/photo-1620754607550-98d3b4e9b741?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Héctor García",
    image:
      "https://images.unsplash.com/photo-1589998059171-488979f09e99?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image:
      "https://images.unsplash.com/photo-1589992331089-15e52f5e0b48?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
  },
];


const FeaturedBooks = () => {
  return (
    <Box sx={{ px: 3, py: 6 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        textAlign="center"
         sx={{color:(theme)=>theme.palette.mode === "dark"?"#fff":"#303f9f" }}
      >
        🛍️ Popular Picks at Our Store 📚
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" ,mt:"4"}}>
        {/* Scrollable section */}
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            pb: 1,
            px: 1,
            maxWidth: "1200px",
            width: "100%",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {sampleBooks.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ minWidth: "250px" }}
            >
              <Card
                elevation={4}
                sx={{
                  minWidth: 250,
                  borderRadius: "20px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                }}
              >
                <CardMedia
                  component="img"
                  height="280"
                  image={book.image}
                  alt={book.title}
                  sx={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    by {book.author}
                  </Typography>
                  <Button
                    size="small"
                    sx={{ mt: 1 }}
                    variant="contained"
                    color="primary"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedBooks;
