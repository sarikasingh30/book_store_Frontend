import React from "react";
import { Box, Typography, Button, Grid,
  Modal,
  Fade,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import BookCard from "../books/BookCard";
import NoBookFound from "../books/NoBookFound";
export default function MoodModal(props) {
  const { selectedMood, moodBooks, handleClose,open,loading}=props
  return (
    <>
      <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop}}
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
          width: "60%",
          maxHeight: "80vh",
          overflowY: "auto",
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

        <Typography variant="body1" color="text.secondary" mb={2}>
          Here are some books to match your {selectedMood?.label.toLowerCase()}{" "}
          mood! 📚
        </Typography>
        {loading ? (
            <CircularProgress color="primary" />
          ) : moodBooks.length > 0 ? (
            <Grid container spacing={4}>
            {moodBooks.map((el) => <BookCard book={el} key={el._id} />)}</Grid>)
          : (
            <NoBookFound onBrowseAll={handleClose}/>
          )}
        
        <Button
          onClick={()=>handleClose()}
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Close
        </Button>
      </Box>
      </Fade>
      </Modal>
    </>
  );
}
