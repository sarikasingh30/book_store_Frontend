import React, { useState, useEffect} from "react";
import { Container, Typography, Box } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import BookCover from "../components/books/BookCover";
import BookInfo from "../components/books/BookInfo";
import AIModel from "../components/books/AIModel";
import SummaryModal from "../components/modals/SummaryModal";

const SingleBook = () => {


  const { id } = useParams();
  const [bookDetail, setBookDetail] = useState();
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    axios(`https://book-store-t37x.onrender.com/books/${id}`)
      .then((res) => setBookDetail(res.data))
      .catch((err) => console.error("Failed to fetch books", err));
  }, [id]);

  if (!bookDetail) return <Typography>Book not found</Typography>;

  return (
    <Container sx={{ my: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <Box
          sx={{
            display: "flex",
            mt: 4,
            justifyContent: "space-around",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            alignItems: "center",
          }}
        >
          {/* Book Cover............................................................................ */}

          <BookCover
            imgUrl={bookDetail.coverImage.url}
            title={bookDetail.title}
          />

          {/* Book Info.............................................................................. */}

          <BookInfo bookDetail={bookDetail} setShowSummary={setShowSummary} />

          {/* AI Model................................................................................ */}
          <AIModel />
        </Box>
      </motion.div>
      {/* 📘 Summary Modal ............................................................................*/}
      <SummaryModal
        setShowSummary={setShowSummary}
        showSummary={showSummary}
        id={bookDetail._id}
        title={bookDetail.title}
        author={bookDetail.author}
        publishedYear={bookDetail.publishedYear}
      />
    </Container>
  );
};

export default SingleBook;
