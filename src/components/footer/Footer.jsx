import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography
} from "@mui/material";

import { motion } from "framer-motion";


import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoP from "../../assets/bookStore-logo.png";

export function Footer() {

  return (
    <motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Box
    sx={{
      backgroundColor: (theme) => theme.palette.primary.main,
      py: 4,
      borderTop: "1px solid",
      borderColor: "divider",
      mt: "auto",
      color: "white"
    }}
  >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Logo and Social */}
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <img
                src={logoP}
                alt="Logo"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  marginRight: 10,
                }}
              />
              <Typography variant="h6" component="span">
                Baba - Book Store
              </Typography>
            </Box>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <IconButton color="inherit" aria-label="GitHub">
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4}>
            <Stack
              direction="row"
              spacing={4}
              justifyContent="center"
              alignItems="flex-start"
            >
              {[1, 2, 3].map((i) => (
                <Stack key={i} spacing={1}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Section {i}
                  </Typography>
                  <Typography variant="body2">Link 1</Typography>
                  <Typography variant="body2">Link 2</Typography>
                  <Typography variant="body2">Link 3</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Stack spacing={1} alignItems="center">
              <Typography variant="subtitle1" fontWeight="bold">
                Contact Us
              </Typography>
              <Typography variant="body2">
                Email: contact@bababook.com
              </Typography>
              <Typography variant="body2">Phone: +91 9876543210</Typography>
              <Typography variant="body2">Chandigarh, India</Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          color="white"
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} Baba Book Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
    </motion.div>
  );
}
