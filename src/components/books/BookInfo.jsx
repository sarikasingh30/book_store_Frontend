import React, { useContext, useState } from "react";
import {
  Typography,
  Box,
  Chip,
  Rating,
  IconButton,
  Button,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router";

export default function BookInfo({ bookDetail, setShowSummary }) {
  const { user, setRefreshCounts } = useContext(AuthContext);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const navigate = useNavigate();

  const addProduct = async (bookId, quantity, val) => {
    await axios.post(`https://book-store-t37x.onrender.com/cw/${user.id}/${val}`, {
      bookId,
      quantity,
    });
    if (val === "wishlist") {
      setIsInWishlist(true);
    }

    setRefreshCounts((prev) => !prev);
  };

  const handleBuyNow = (Bid) => {
    addProduct(Bid, 1, "cart");
    navigate(`/cart/${user?.id}`);
  };

  const isLoggedIn = !!user?.id; 

  return (
    <>
      <Box
        mt={2}
        p={3}
        width={{ xs: "100%", sm: "60%", md: "40%" }}
        sx={{
          borderRadius: "3%",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "rgb(250, 250, 250) 0px 1px 2px, rgb(250, 250, 250) 0px 2px 4px, rgb(172, 170, 170) 0px 4px 8px, rgb(183, 178, 178) 0px 8px 16px, rgb(97, 96, 96) 0px 16px 32px, rgb(124, 121, 121) 0px 32px 64px"
              : "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}
      >
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
              disabled={!isLoggedIn}
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

        <Box mt={4} display="flex" justifyContent={"space-around"} gap={2}>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              onClick={() => handleBuyNow(bookDetail._id)}
              disabled={!bookDetail.isAvailable||!isLoggedIn}
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
              onClick={() => addProduct(bookDetail._id, 1, "cart")}
              disabled={!bookDetail.isAvailable||!isLoggedIn}
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

          <motion.div whileTap={{ scale: 0.95 }}>
            <IconButton
              variant="contained"
              onClick={() => addProduct(bookDetail._id, 1, "wishlist")}
              sx={{
                bgcolor: isInWishlist ? "error.main" : "primary.main",
                color: "white",
                "&:hover": {
                  bgcolor: isInWishlist ? "error.dark" : "primary.dark",
                },
              }}
              disabled={!isLoggedIn}
            >
              {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}
