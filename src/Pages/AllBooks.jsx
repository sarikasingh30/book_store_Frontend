import React, { useEffect, useState } from "react";
import { Container, Grid, TextField, Box } from "@mui/material";
import axios from "axios";
import BookCard from "../components/books/BookCard";
import NoBookFound from "../components/books/NoBookFound";


export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios("https://book-store-ozfo.onrender.com/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Failed to fetch books", err));
  }, []);
  // console.log(books);
  const filteredBooks = books?.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.genre?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ my: 4 ,p: 2}}>
      <Box mb={4}>
        <TextField
          fullWidth
          label="Search by title, author or genre"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      {filteredBooks.length===0 ? <NoBookFound/>: 
      <Grid container spacing={4}>
        {filteredBooks.map((book) => (
          <BookCard book={book} key={book._id} />
          
        ))}
      </Grid>}
    </Container>
  );
}
