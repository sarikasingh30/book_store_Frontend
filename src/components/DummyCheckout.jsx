import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const dummyCart = [
  { id: 1, title: "The Alchemist", price: 399, quantity: 1 },
  { id: 2, title: "Atomic Habits", price: 499, quantity: 2 },
];

const DummyCheckout = () => {
    const navigate=useNavigate()
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({
    name: "",
    address: "",
    pincode: "",
  });

  const total = dummyCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleProceed = () => {
    setStep(2); // Show address form
  };

  const handleAddressSubmit = () => {
    alert(`Order placed for ${address.name} at ${address.address}`);
    navigate("/")
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      maxWidth="500px"
      mx="auto"
      my={5}
    >
      <Paper elevation={3} sx={{ p: 4 }}>
        {step === 1 && (
          <>
            <Typography variant="h5" gutterBottom>
              🛒 Checkout Summary
            </Typography>
            <Divider sx={{ my: 2 }} />

            <List>
              {dummyCart.map((item) => (
                <ListItem key={item.id} disableGutters>
                  <ListItemText
                    primary={item.title}
                    secondary={`Quantity: ${item.quantity}`}
                  />
                  <Typography>₹{item.price * item.quantity}</Typography>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">₹{total}</Typography>
            </Box>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={handleProceed}
              >
                Proceed to Address
              </Button>
            </motion.div>
          </>
        )}

        {step === 2 && (
          <motion.div
            key="address"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Typography variant="h5" gutterBottom>
              🏠 Delivery Address
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Box component="form" display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Full Name"
                value={address.name}
                onChange={(e) => setAddress({ ...address, name: e.target.value })}
                required
              />
              <TextField
                label="Address"
                multiline
                rows={3}
                value={address.address}
                onChange={(e) => setAddress({ ...address, address: e.target.value })}
                required
              />
              <TextField
                label="Pincode"
                value={address.pincode}
                onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                required
              />
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddressSubmit}
                >
                  Submit & Pay
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        )}
      </Paper>
    </Box>
  );
};

export default DummyCheckout;
