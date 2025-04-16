import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Cart = () => {
  const { setRefreshCounts } = useContext(AuthContext);
  const { userId } = useParams();
  const [cart, setCart] = useState([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchCart = useCallback(async () => {
    const res = await axios.get(`https://book-store-ozfo.onrender.com/cw/${userId}/cart`);
    setCart(res.data?.items || []);
  }, [userId]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const updateQuantity = async (bookId, quantity) => {
    await axios.put(`https://book-store-ozfo.onrender.com/cw/${userId}/cart`, {
      bookId,
      quantity,
    });
    setRefreshCounts((prev) => !prev);
    fetchCart();
  };

  const removeItem = async (val) => {
    await axios.delete(`https://book-store-ozfo.onrender.com/cw/${userId}/cart`, {
      data: { bookId: val },
    });
    setRefreshCounts((prev) => !prev);
    fetchCart();
  };
  const moveToWishlist = async (bookId) => {
    let fromType = "cart";
    let toType = "wishlist";
    await axios.put(`https://book-store-ozfo.onrender.com/cw/move`, {
      userId,
      bookId,
      fromType,
      toType,
    });
    setRefreshCounts((prev) => !prev);
    fetchCart();
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
        🛒 Your Cart 📚
      </Typography>
      <Box
        p={2}
        m={2}
        display="flex"
        flexDirection={isSmallScreen ? "column" : "row"}
        gap={4}
      >
        <Box flex={3}>
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
              src={require("../assets/Empty_Cart-512.webp")}
              alt="Empty Cart"
              style={{ maxWidth: "300px", width: "100%", height: "auto" }}
            />
            <Typography variant="h5" fontWeight="bold">
              No Items in the Cart
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
                      <Typography variant="h5" mt={2}>
                        Price : $ {item.bookId.price} 
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 1 }} />

                    <Box
                      display="flex"
                      flexDirection={isSmallScreen ? "column" : "row"}
                      justifyContent="space-between"
                      alignItems={isSmallScreen ? "stretch" : "center"}
                      gap={isSmallScreen ? 2 : 1}
                    >
                      <Box
                        display="flex"
                        justifyContent={
                          isSmallScreen ? "space-between" : "flex-start"
                        }
                        gap={1}
                        width={isSmallScreen ? "100%" : "auto"}
                      >
                        <IconButton
                          onClick={() =>
                            updateQuantity(item.bookId._id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}  
                        >
                          <Remove />
                        </IconButton>
                        <Typography pt={0.5} variant="h6" textAlign={"center"}>{item.quantity}</Typography>
                        <IconButton
                          onClick={() =>
                            updateQuantity(item.bookId._id, item.quantity + 1)
                          }
                          disabled={item.quantity >=item.bookId.stock} 
                        >
                          <Add />
                        </IconButton>
                      </Box>

                      <Box
                        display="flex"
                        flexDirection={isSmallScreen ? "column" : "row"}
                        alignItems={isSmallScreen ? "stretch" : "center"}
                        gap={1}
                        width={isSmallScreen ? "100%" : "auto"}
                      >
                        {" "}
                        <Button
                          variant="outlined"
                          color="white"
                          onClick={() => moveToWishlist(item.bookId._id)}
                          sx={{ ml: 2 }}
                        >
                          Move to Wishlist
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
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </Box>
        <Box flex={1}>
          <Card sx={{ p: 3, borderRadius: 4, boxShadow: 3 }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Order Summary
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography variant="body1">
              Total Items:{" "}
              <strong>
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </strong>
            </Typography>

            <Typography variant="body1" mt={1}>
              Total Amount:{" "}
              <strong>
                $ 
                {cart
                  .reduce(
                    (acc, item) => acc + item.bookId.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </strong>
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, py: 1.5 }}
              disabled={cart?.length===0}
            >
              Proceed to Checkout
            </Button>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
