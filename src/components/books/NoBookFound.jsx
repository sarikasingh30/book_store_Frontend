// import React, { useEffect, useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import noBookImg from "../../assets/bookslib.jpg"; 
// import bookCharacter from "../../assets/donald_duck.png"; 

// const getRandomPosition = () => ({
//   left: Math.floor(Math.random() * 80) + "vw",
// });

// const NoBookFound = () => {
//   const navigate = useNavigate();
//   const [position, setPosition] = useState(getRandomPosition());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition(getRandomPosition());
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box
//       component={motion.div}
//       initial={{ opacity: 0, y: -80 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6 }}
//       height="90vh"
//       textAlign="center"
//       sx={{
//         px: 3,
//         py: 2,
//         position: "relative",
//         overflow: "hidden",
//         backgroundImage: `url(${noBookImg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <Box
//         height="60%"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Box zIndex={3}>
//           <Typography variant="h2" color="white" fontWeight="bold" mb={1}>
//             Oops! Book Not Found 📚😔
//           </Typography>
          
//           <Button
//             variant="contained"
//             color="primary"
//             height="60px"
//             component={motion.button}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => navigate("/")} // or any reset action
//           >
//             Browse All Books
//           </Button>
//         </Box>

//         <motion.img
//           src={bookCharacter}
//           alt="Book Character"
//           style={{
//             width: "220px",
//             height: "220px",
//             position: "absolute",
//             bottom: "10px",
//             zIndex: 1,
//           }}
//           animate={{
//             left: position.left,
//           }}
//           transition={{
//             duration: 2,
//             ease: "easeInOut",
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default NoBookFound;
import React, { useEffect, useState } from "react";
import { Box, Typography, Button} from "@mui/material";
import { motion } from "framer-motion";
import noBookImg from "../../assets/bookslib.jpg";
import bookCharacter from "../../assets/donald_duck.png";

const getRandomPosition = () => ({
  left: Math.floor(Math.random() * 70) + "vw",
});

const NoBookFound = ({ onBrowseAll }) => {
  const [position, setPosition] = useState(getRandomPosition());
  // const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        p: 4,
        backgroundImage: `url(${noBookImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        backdropFilter: "blur(8px)",
        color: "#fff",
        textAlign: "center",
        minHeight: "400px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Oops! Book Not Found 📚😔
        </Typography>
        <Typography variant="body1" mb={3}>
          Looks like we couldn’t find any books that match this mood. Try another one or explore all books!
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={onBrowseAll}
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore for More
        </Button>
      </Box>

      <motion.img
        src={bookCharacter}
        alt="Book Character"
        style={{
          width: "180px",
          height: "180px",
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
  );
};

export default NoBookFound;
