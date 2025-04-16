import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from "@mui/material";

import axios from "axios";
export default function SummaryModal(props) {
  const { setShowSummary, showSummary,id, title, author, publishedYear } = props;
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (showSummary) {
      setLoading(true);
      axios
        .post(`http://localhost:3030/api/summary`, {id,
          title,
          author,
          publishedYear,
        }) 
        .then((res) => {
          setSummary(res.data.summary || "No summary available.");
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching summary:", err);
          setSummary("Failed to load summary.");
          setLoading(false);
        });
    }
  }, [showSummary, author, title, publishedYear,id]);
  return (
    <>
 

<Dialog
  open={showSummary}
  onClose={() => setShowSummary(false)}
  fullWidth
  maxWidth="sm"
>
  <DialogTitle
    sx={{
      fontWeight: "bold",
      fontSize: "1.5rem",
      textAlign: "center",
      backgroundColor: "#f5f5f5",
    }}
  >
    📖 Book Summary
  </DialogTitle>

  <DialogContent>
    {loading ? (
      <Box display="flex" justifyContent="center" alignItems="center" py={4}>
        <CircularProgress size={40} />
      </Box>
    ) : summary ? (
      <Box
        sx={{
          backgroundColor: "#fafafa",
          padding: 3,
          borderRadius: 2,
          boxShadow: 2,
          mt:3
        }}
      >
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          {summary}
        </Typography>
      </Box>
    ) : (
      <Typography variant="body2" color="error" textAlign="center" py={2}>
        No summary available for now...
      </Typography>
    )}
  </DialogContent>
</Dialog>

    </>
  );
}
