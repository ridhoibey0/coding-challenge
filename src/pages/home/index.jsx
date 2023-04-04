import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Navbar } from "@/themes/components/Navbar";
import { Hero } from "@/themes/components/Hero";
import { Footer } from "@/themes/components/Footer";
const Home = () => {
  return (
    <Container maxW="container.xl">
      <Navbar />
      <Hero />
    </Container>
  );
};

export default Home;
