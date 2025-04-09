import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async () => {
    
    try {
      const res = await fetch("http://localhost:3030/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = "/home";
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <Stack spacing={2} mt={2}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
        />
        <TextField
        required
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
        required
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" onClick={handleRegister} fullWidth>
          Register
        </Button>
      </Stack>
    </motion.div>
  );
};

export default Register;
