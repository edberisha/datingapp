import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import ChatAlerts from '../components/ChatAlerts';
import Navbar from '../components/NavBar'; 

function Messages() {
    return (
      <>
        <Head>
          <title>Dating App</title>
          <meta name="description" content="Dating app profile page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box 
          backgroundColor="#fcecdc" 
          p={4} 
          position="relative" 
          minH="100vh" // Ensure it takes full height

        >
          <Flex 
          // border="2px solid limegreen"
            mt="3vh"
            gap={10}
            justify={"center"}
            flexDir={['column','column','column','column', 'row']}
          >
            <Box
              position="relative"
              zIndex={1}
              p="3vh" // Padding around ChatAlerts
              maxW="100%" // Ensures it doesn't overflow
              boxSizing="border-box" // Includes padding in width calculations
            >
              <ChatAlerts />
            </Box>
          </Flex>
          <Navbar />
        </Box>
      </>
    );
}

export default Messages;
