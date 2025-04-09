import React from "react";
import {
  Tooltip,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Rating,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function BookCard({ book }) {
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Link to={`/books/${book._id}`} style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={
                  book?.coverImage.url ||
                  "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80"
                }
                src={
                  book?.coverImage.url ||
                  "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80"
                }
                alt={book?.title}
                sx={{ height: 220, objectFit: "cover" }}
              />
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" gutterBottom>
                    {book?.title}
                  </Typography>
                  {/* Summary Icon */}
                  <Tooltip title="🤖 Wanna know more? I'm here!...">
                    <IconButton
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        p: "2",
                        backgroundColor: "background.paper",
                        color: "text.primary",
                        "&:hover": {
                          backgroundColor: "primary.light",
                          color: "white",
                        },
                        boxShadow: 2,
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      <SmartToyIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box
                  mt={1}
                  mb={1}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" color="textSecondary">
                    {book?.author} • {book?.publishedYear}
                  </Typography>
                </Box>
                <Chip
                  label={book?.genre || "Unknown Genre"}
                  variant="filled"
                  size="small"
                  sx={{ fontWeight: "bold", borderRadius: "4px" }}
                />

                <Box mt={1} mb={1}>
                  {book?.categories.map((el, index) => {
                    return (
                      <Chip
                        key={index}
                        label={el || "Unknown Category"}
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1 }}
                      />
                    );
                  })}
                </Box>

                <Rating
                  value={book?.ratings}
                  precision={0.1}
                  readOnly
                  size="small"
                />
                <Typography
                  mt={1}
                  variant="body2"
                  color="text.secondary"
                  noWrap
                >
                  {book?.description}
                </Typography>
                <Typography
                  mt={1}
                  variant="h6"
                  color={book?.isAvailable ? "green" : "red"}
                >
                  {book?.isAvailable ? "Available" : "Sold Out"}
                </Typography>
                <Typography
                  mt={1}
                  variant="body1"
                  sx={{
                    display: "inline-block",
                    px: 1.5,
                    py: 0.5,
                    fontWeight: "bold",
                    borderRadius: 1,
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#fff" : "#303f9f",
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "#000" : "#fff",
                  }}
                >
                  ${book?.price.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Link>
      </Grid>
    </>
  );
}
