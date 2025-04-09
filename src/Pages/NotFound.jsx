import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../assets/notFound1.jpg";
import characterImg from "../assets/donald3.png"

const getRandomPosition = () => ({
  left: Math.floor(Math.random() * 80) + "vw",
});

const NotFound = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState(getRandomPosition());

  // Move the character randomly every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      
      height="90vh"
      textAlign="center"
      sx={{
        px: 3,
        py:2,
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${notFoundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      

   <Box 
   height="60%" display="flex"

      flexDirection="column"
      alignItems="center"
      justifyContent="space-between">
        
       {/* Message & Button */}
       <Box zIndex={3}>
        <Typography variant="h6" mb={1} color="white">
          The page you're looking for doesn't exist or has been moved
        </Typography>
        <Button
          variant="contained"
          color="primary"
          mb={1}
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
        >
          Go Home
        </Button>
      </Box>
      {/* Moving character */}
      <Box>
      <motion.img
        src={characterImg}
        alt="Character"
        style={{
          width: "250px",
          height: "250px",
          position: "absolute",
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
    </Box>
  );
};

export default NotFound;
