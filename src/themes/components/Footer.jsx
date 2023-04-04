import { Stack, Container, Button, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Container as="footer" maxW="container.xl">
      <Stack
        spacing={8}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        py={{ base: "12", md: "16" }}
      >
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Online appointment scheduling
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">How it works</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
