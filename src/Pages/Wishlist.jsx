import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Wishlist = () => {
  const { setRefreshCounts } = useContext(AuthContext);
  const { userId } = useParams();
  const [cart, setCart] = useState([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchWishlist = useCallback(async () => {
    const res = await axios.get(`https://book-store-ozfo.onrender.com/cw/${userId}/wishlist`);
    setCart(res.data?.items || []);
  }, [userId]);

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  const removeItem = async (val) => {
    await axios.delete(`https://book-store-ozfo.onrender.com/cw/${userId}/wishlist`, {
      data: { bookId: val },
    });
    setRefreshCounts((prev) => !prev);
    fetchWishlist();
  };
  const moveToWishlist = async (bookId) => {
    let fromType = "wishlist";
    let toType = "cart";
    await axios.put(`https://book-store-ozfo.onrender.com/cw/move`, {
      userId,
      bookId,
      fromType,
      toType,
    });
    setRefreshCounts((prev) => !prev);
    fetchWishlist();
  };

  return (
    <Box p={2}>
      <Typography
        variant="h4"
        fontWeight="bold"
        m={4}
        textAlign="center"
        sx={{
          color: (theme) =>
            theme.palette.mode === "dark" ? "#fff" : "#303f9f",
        }}
      >
        ♥️ Your Wishlist 📚
      </Typography>

      <Box p={2} m={2}>
        {cart?.length === 0 ? (
             <Box
             display="flex"
             flexDirection="column"
             alignItems="center"
             justifyContent="center"
             textAlign="center"
             mt={4}
             gap={2}
           >
             <img
               src={require("../assets/wishlist.png")}
               alt="Empty Wishlist"
               style={{ maxWidth: "300px", width: "100%", height: "auto" }}
             />
             <Typography variant="h5" fontWeight="bold">
               No Items in the Wishlist
             </Typography>
             <Button
               variant="contained"
               color="primary"
               component={Link}
               to="/books"
             >
               Browse Books
             </Button>
           </Box>
        ) : (
          cart.map((item) => (
            <motion.div
              key={item.bookId._id}
              whileHover={{ scale: 1.02 }}
              style={{ borderRadius: 12 }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: isSmallScreen ? "column" : "row",
                  mb: 3,
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    item?.bookId.coverImage?.url ||
                    "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80"
                  }
                  alt={item?.bookId.title}
                  sx={{
                    width: isSmallScreen ? "100%" : 220,
                    height: 220,
                    objectFit: "cover",
                    borderRadius: 3,
                    p: 2,
                  }}
                />

                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box mb={1}>
                    <Typography variant="h4" fontWeight={600}>
                      {item.bookId.title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                      {item.bookId.author} • {item.bookId.publishedYear}
                    </Typography>
                    <Typography variant="h6" mt={2}>
                      {item.bookId.description}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5" mt={2}>
                      Price : $ {item.bookId.price}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 1 }} />

                  <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Button
                      variant="outlined"
                      color="white"
                      onClick={() => moveToWishlist(item.bookId._id)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => removeItem(item.bookId._id)}
                      startIcon={<Delete />}
                    >
                      Remove
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Wishlist;
