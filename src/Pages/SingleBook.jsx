import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Chip,
  Rating,
  IconButton,
  Button,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import AIRobo from "../assets/aiSummary.png";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const SingleBook = () => {
  const { id } = useParams();
  const [showSummary, setShowSummary] = useState(false);
  const [bookDetail, setBookDetail] = useState();

  useEffect(() => {
    axios(`http://localhost:3030/books/${id}`)
      .then((res) => setBookDetail(res.data))
      .catch((err) => console.error("Failed to fetch books", err));
  }, [id]);

  if (!bookDetail) return <Typography>Book not found</Typography>;

  return (
    <Container sx={{ mt: 4, p: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            alignItems: "center",
          }}
        >
          {/* Book Cover............................................................................ */}
          <motion.img
            src={bookDetail.coverImage.url}
            alt={bookDetail.title}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              width: "300px",
              height: "400px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            }}
          />
        
          {/* Book Info.............................................................................. */}
          <Box p={2}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {bookDetail.title}
            </Typography>

            <Box mt={2} display="flex" justifyContent="space-between">
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
                mr={2}
              >
                by {bookDetail.author} ({bookDetail.publishedYear})
              </Typography>

              {/* Summary Icon .................................................................*/}
              <Tooltip title="🤖 May I help You...">
                <IconButton
                  onClick={() => setShowSummary(true)}
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    p: "1",
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

            <Box mt={2} display="flex" justifyContent="space-between">
              <Rating
                value={bookDetail.ratings}
                precision={0.1}
                readOnly
                sx={{ mt: 1 }}
              />
              <Chip label={bookDetail.language} p={1} />
            </Box>

            <Box mt={2}>
              <Chip
                label={bookDetail.genre}
                color="primary"
                variant="filled"
                sx={{
                  mr: 1,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "primary.light"
                      : "primary.main",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "black" : "white",
                }}
              />
            </Box>

            <Box mt={2}>
              {bookDetail?.categories.map((cat, i) => (
                <Chip
                  key={i}
                  label={cat}
                  variant="filled"
                  sx={{
                    mr: 1,
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "secondary.light"
                        : "primary.main",
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "black" : "white",
                  }}
                />
              ))}
            </Box>

            <Typography variant="body1" mt={3} color="text.secondary">
              {bookDetail.description}
            </Typography>

            <Box mt={3}>
              <Chip
                label={bookDetail.isAvailable ? "Available" : "Sold Out"}
                color={bookDetail.isAvailable ? "success" : "error"}
                sx={{ mr: 2 }}
              />
              <Chip
                label={`$${bookDetail.price.toFixed(2)}`}
                variant="filled"
                sx={{
                  background: "#303f9f",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              />
            </Box>

            <Box mt={4} display="flex" gap={2}>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  disabled={!bookDetail.isAvailable}
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                    "&:disabled": {
                      bgcolor: "grey.700",
                      color: "grey.300",
                    },
                  }}
                >
                  Buy Now
                </Button>
              </motion.div>

              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  disabled={!bookDetail.isAvailable}
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                    "&:disabled": {
                      bgcolor: "grey.700",
                      color: "grey.300",
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </motion.div>
            </Box>
          </Box>

          {/* Character */}
          <Box display="flex">
            <motion.div
              initial={{ opacity: 1, x: 0, y: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                x: [0, 100, 150, 400],
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
        </Box>
      </motion.div>

      {/* 📘 Summary Modal */}
      <Dialog
        open={showSummary}
        onClose={() => setShowSummary(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Summary</DialogTitle>
        <DialogContent>
          {bookDetail.description ? (
            <Typography variant="body1" color="text.secondary">
              {bookDetail.description}
            </Typography>
          ) : (
            <Box display="flex" justifyContent="center">
              <motion.img
                src={AIRobo}
                alt="AI Summary Placeholder"
                style={{
                  width: "200px",
                  height: "200px",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default SingleBook;
