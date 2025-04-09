import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedBooks from "../components/home/FeaturedBooks";
import WhyUs from "../components/home/WhyUs";
import ReaderReviews from "../components/home/ReadersReviews";
import MoodDiscovery from "../components/home/MoodbasedDiscovery";

export function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedBooks />
      <MoodDiscovery/>
      <ReaderReviews/>
      <WhyUs />
    </div>
  );
}
