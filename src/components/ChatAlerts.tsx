import { Box, Text, Stack } from '@chakra-ui/react';

const ChatAlerts = () => {
  return (
    <Box
    // try again
      maxW="md"  // Maximum width of the ChatAlerts box
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg="#ffffff"
      boxShadow="lg"
      mx="auto"  // Center the box horizontally
      position="relative"
    >
      <Text textAlign="center" fontSize="lg" fontWeight="bold" mb={3}>
        Messages
      </Text>
      <Stack spacing={3}>
        <Box
          style={{ 
            padding: '1rem', 
            borderWidth: '1px', 
            borderRadius: '0.375rem', 
            backgroundColor: '#f0f0f0' 
          }}
        >
          <Text><strong>John:</strong> You know I wouldn&apos;t ask this unless it were an emergency.</Text>
        </Box>
        <Box
          style={{ 
            padding: '1rem', 
            borderWidth: '1px', 
            borderRadius: '0.375rem', 
            backgroundColor: '#e8340c', // Different background color for the user's message
            marginLeft: 'auto', // Align to the right
            maxWidth: '75%' // Optional: restrict width to prevent overflow
          }}
        >
          <Text color="#ffffff"><strong>You: </strong>I know...</Text> {/* Adjust text color for better readability */}
        </Box>
        <Box
          style={{ 
            padding: '1rem', 
            borderWidth: '1px', 
            borderRadius: '0.375rem', 
            backgroundColor: '#e8340c', // Different background color for the user's message
            marginLeft: 'auto', // Align to the right
            maxWidth: '75%' // Optional: restrict width to prevent overflow
          }}
        >
          <Text color="#ffffff">
            <strong>You: </strong> But please - let this be the last time...<br/><br/>
            <span style={{fontWeight:'600'}}> 
              **Account Holder:** Rebecca White<br/>
              **Bank Name:** ABG Bank<br/>
              **Account Number:** 873243429<br/>
              **Sort Code:** 14-3412-26<br/>
              **IBAN:** GB12FICB12345678901234<br/>
              **SWIFT/BIC Code:** FICBGB2L<br/><br/>
            </span>
            Please let me know once you&apos;ve made the transfer.
          </Text> {/* Adjust text color for better readability */}
        </Box>
      </Stack>
    </Box>
  );
};

export default ChatAlerts;
