import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedBooks from "../components/home/FeaturedBooks";
import WhyUs from "../components/home/WhyUs";
import ReaderReviews from "../components/home/ReadersReviews";
import MoodDiscovery from "../components/home/MoodbasedDiscovery";
import { Box } from "@mui/material";


export function Home() {
  return (
    <Box>
      <HeroSection />
      <FeaturedBooks />
      <MoodDiscovery/>
      <ReaderReviews/>
      <WhyUs />
    </Box>
  );
}
