import { Box, Container, Flex, Heading, HStack, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding={4}>
        <HStack spacing={8}>
          <Heading size="md">MyWebsite</Heading>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none" }}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none" }}>
            Contact
          </Link>
        </HStack>
        <Spacer />
      </Flex>
      <Container centerContent maxW="container.md" height="calc(100vh - 64px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading fontSize="4xl">Welcome to MyWebsite</Heading>
          <Text fontSize="xl">This is a blank canvas for your one-page website.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;