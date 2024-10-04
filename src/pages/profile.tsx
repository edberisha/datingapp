import Head from 'next/head';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image'; 
import ProfileCard from '../components/ProfileCard';
import Navbar from '../components/NavBar'; 
import hearts from '../assets/applogo.svg';




const profile = () => {

  
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
      backgroundColor="#fcecdc" 
      p={4} 
      position="relative"
      height="100vh">
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
                  // border='2px solid red'
                    textAlign="center"
                    color="#e8340c"
                    fontSize={'clamp(15px, 1vw, 22px)'}
                  >
                    perfect match
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
        </Flex>

        </Flex>
        <Navbar />
      </Box>
    </>
  );
};

export default profile;
