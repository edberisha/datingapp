import { Box, Text, VStack } from '@chakra-ui/react';

const ChatBox = () => {
  // Sample messages for demonstration
  const messages = [
    { user: 'Alice', text: 'Hey there!' },
    { user: 'Bob', text: 'How’s it going?' },
    { user: 'Charlie', text: 'What are you up to?' },
  ];

  return (
    <Box
      width={{ base: '90%', md: '300px' }} // Responsive width
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p={4}
      maxHeight="400px"
      overflowY="auto"
    >
      <Text fontWeight="bold" mb={3}>Messages</Text>
      <VStack spacing={3} align="start">
        {messages.map((msg, index) => (
          <Box key={index} bg="gray.100" p={2} borderRadius="md" width="100%">
            <Text fontWeight="semibold">{msg.user}:</Text>
            <Text>{msg.text}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ChatBox;
