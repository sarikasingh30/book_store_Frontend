import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, useNavigate } from "react-router";

const FeaturedBooks = () => {
  const [topBooks, setTopBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTopBooks = async () => {
      try {
        await axios("https://book-store-t37x.onrender.com/books/top-rated")
          .then((res) => setTopBooks(res.data))
          .catch((err) => console.error("Failed to fetch books", err));
      } catch (err) {
        console.error("Failed to fetch top-rated books", err);
      }
    };

    fetchTopBooks();
  }, []);
  return (
    <Box sx={{ px: 3, py: 4}}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        textAlign="center"
        sx={{
          color: (theme) =>
            theme.palette.mode === "dark" ? "#fff" : "#303f9f",
        }}
      >
        🛍️ Popular Picks at Our Store 📚
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", my: "4" }}>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            pb: 1,
            px: 1,
            mb:2,
            maxWidth: "1200px",
            width: "100%",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {topBooks?.map((book) => (
            <motion.div
              key={book._id}
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
                  image={book.coverImage.url}
                  alt={book.title}
                  sx={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    by {book.author}
                  </Typography>
                  <Link to={`/books/${book._id}`}>
                    {" "}
                    <Button
                      size="small"
                      sx={{ mt: 1 }}
                      variant="contained"
                      color="primary"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        {" "}
        <Button
          variant="contained"
          color="primary"
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          sx={{p:"4"}}
          onClick={() => navigate("/books")}
        >
          Explore More
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedBooks;
