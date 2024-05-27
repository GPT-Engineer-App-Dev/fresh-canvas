import { Box, Container, Flex, Heading, HStack, Link, Spacer, Text, VStack, Spinner, Alert, AlertIcon, Button } from "@chakra-ui/react";
import { useEvents, useAddEvent } from '../api/supabase';
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const { data: events, error, isLoading } = useEvents();
  const addEventMutation = useAddEvent();

  if (isLoading) return <Spinner />;
  if (error) return (
    <Alert status="error">
      <AlertIcon />
      {error.message}
    </Alert>
  );

  const handleAddEvent = () => {
    addEventMutation.mutate({ name: 'New Event', date: '2023-10-10', description: 'Description of the new event' });
  };
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
        <Button onClick={handleAddEvent}>Add Event</Button>
          <VStack spacing={4}>
            {events.map(event => (
              <Box key={event.id} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{event.name}</Heading>
                <Text mt={4}>{event.description}</Text>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;