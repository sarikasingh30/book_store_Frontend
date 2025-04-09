import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import { motion } from "framer-motion";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😍", label: "Romantic" },
  { emoji: "😎", label: "Chill" },
  { emoji: "😴", label: "Sleepy" },
  { emoji: "🤯", label: "Mind-Blown" },
];

const MoodDiscovery = () => {
  const [open, setOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMood(null);
  };

  return (
    <Box sx={{ textAlign: "center", px: 4, py: 8, backgroundColor: "#f4f4f8" }}>
      <Typography variant="h4" fontWeight="bold" mb={4} color="primary">
        🎭 Mood-based Book Discovery
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
        {moods.map((mood, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95, rotate: -10 }}
          >
            <Button
              variant="contained"
              onClick={() => handleMoodClick(mood)}
              sx={{
                fontSize: 30,
                minWidth: 80,
                minHeight: 80,
                borderRadius: "50%",
                background: "#fff",
                color: "#333",
                border: "2px solid #ccc",
                boxShadow: "2px 4px 12px rgba(0,0,0,0.1)",
                "&:hover": {
                  background: "#fbe7c6",
                },
              }}
            >
              {mood.emoji}
            </Button>
          </motion.div>
        ))}
      </Box>

      {/* Mood Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "background.paper",
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" fontWeight="bold" mb={2}>
              {selectedMood?.emoji} {selectedMood?.label}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Here are some books to match your {selectedMood?.label.toLowerCase()} mood! 📚
            </Typography>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{ mt: 3 }}
            >
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default MoodDiscovery;
