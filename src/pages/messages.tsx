import Head from 'next/head';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import Image from 'next/image'; 
import ChatAlerts from '../components/ChatAlerts';
import ChatBox from '../components/ChatBox'; // Import the new ChatBox component
import Navbar from '../components/NavBar'; 
import hearts from '../assets/applogo.svg';

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
          position="relative">
          <Flex>
            <Box left={4}>
              <Link href="/">
                <Image 
                  src={hearts} 
                  alt="Hearts" 
                  width={150} 
                  height={150} 
                />
              </Link>
              <Text
                textAlign="center"
                color="#e8340c"
                fontSize={'clamp(25px, 2vw, 32px)'}
              >
                perfect match
              </Text>
            </Box>
          </Flex>
          <Flex 
            mt="3vh"
            gap={10}
            justify={"center"}
            flexDir={['column','column','column','column', 'row']}
          >
            <Box
              // ChatBox on the left
              width={{ base: '90%', md: '300px' }} // Responsive width
            >
              <ChatBox />
            </Box>
            <Box
              top={4}
              right={4}
              zIndex={1}
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
