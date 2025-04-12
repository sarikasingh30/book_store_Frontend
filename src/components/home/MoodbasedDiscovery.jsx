import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";

import MoodModal from "../modals/MoodModal";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😍", label: "Romantic" },
  { emoji: "🕵️‍♂️", label: "Mystery" },
  { emoji: "💪", label: "Motivational" },
  { emoji: "😱", label: "Thriller" },
  { emoji: "😂", label: "Funny" }
];

const MoodDiscovery = () => {
  const [open, setOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);
    const [loading, setLoading] = useState(false);
  
  const [moodBooks, setMoodBooks] = useState([]);

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    setOpen(true);
    setLoading(true); 

    axios
      .post("http://localhost:3030/api/mood", { mood: mood.label.toLowerCase() })
      .then((res) =>setMoodBooks(res.data.books))
      .catch((err) => console.error("Failed to fetch books", err)).finally(()=>{
        setLoading(false)
      })
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMood(null);
    setMoodBooks([]);
  };

  return (
    <Box sx={{ textAlign: "center", px: 4, py: 8, backgroundColor: "#f4f4f8" }}>
      <Typography variant="h4" fontWeight="bold" mb={4} color="primary">
        🎭 Mood-based Book Discovery 📚
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
                  background: (theme) =>
                    theme.palette.mode === "dark" ? "black" : "#303f9f",
                },
              }}
            >
              {mood.emoji}
            </Button>
          </motion.div>
        ))}
      </Box>

      {/* Mood Modal */}
    
          <MoodModal selectedMood={selectedMood} moodBooks={moodBooks} handleClose={handleClose} open={open} loading={loading}/>
        
    
    </Box>
  );
};

export default MoodDiscovery;
