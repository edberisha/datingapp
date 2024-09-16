import Head from 'next/head';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image'; 
import ProfileCard from '../components/ProfileCard';
import ChatAlerts from '../components/ChatAlerts';
import Navbar from '../components/NavBar'; 
import hearts from '../assets/applogo.svg';
import perfectmatch from '../assets/perfectmatch.svg';

const Home = () => {
  return (
    <>
      <Head>
        <title>Dating App</title>
        <meta name="description" content="Dating app profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box 
      // border="2px solid purple"
      height="200vh" 
      backgroundColor="#fcecdc" 
      p={4} 
      position="relative">
        <Flex
        // border="2px solid blue"
        >
                <Box 
                  left={4}
                >
                  <Image 
                    src={hearts} 
                    alt="Hearts" 
                    width={150} 
                    height={150} 
                  />
                  <Text
                    textAlign="center"
                    color="#e8340c"
                    fontSize={'clamp(25px, 2vw, 32px)'}
                  >
                    perfect match.
                  </Text>
                  
                </Box>
        </Flex>
      <Flex 
      mt="3vh"
      gap={10}
      justify={"center"}
              // border="2px solid limegreen"

      flexDir={['column','column','column','column', 'row']}
      >
       

        <Flex
          direction={{ base: 'column', md: 'row' }} 
          justify="center"
          align="center"
        >
          <ProfileCard />
          {/* ChatAlerts is now positioned absolutely, so it doesn't need to be here */}
        </Flex>
        <Box
        // border="2px solid red"
          top={4}
          right={4}
          zIndex={1} // Ensure it's above other elements if needed
        >
          <ChatAlerts />
        </Box>
        </Flex>
        <Navbar />
      </Box>
    </>
  );
};

export default Home;
