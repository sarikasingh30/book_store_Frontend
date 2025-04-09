import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import noBookImg from "../../assets/bookslib.jpg"; 
import bookCharacter from "../../assets/donald_duck.png"; 

const getRandomPosition = () => ({
  left: Math.floor(Math.random() * 80) + "vw",
});

const NoBookFound = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      height="90vh"
      textAlign="center"
      sx={{
        px: 3,
        py: 2,
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${noBookImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        height="60%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box zIndex={3}>
          <Typography variant="h2" color="white" fontWeight="bold" mb={1}>
            Oops! Book Not Found 📚😔
          </Typography>
          
          <Button
            variant="contained"
            color="primary"
            height="60px"
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")} // or any reset action
          >
            Browse All Books
          </Button>
        </Box>

        <motion.img
          src={bookCharacter}
          alt="Book Character"
          style={{
            width: "220px",
            height: "220px",
            position: "absolute",
            bottom: "10px",
            zIndex: 1,
          }}
          animate={{
            left: position.left,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </Box>
    </Box>
  );
};

export default NoBookFound;
