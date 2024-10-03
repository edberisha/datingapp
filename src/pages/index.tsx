import Head from 'next/head';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image'; 
import Navbar from '../components/NavBar'; 
import hearts from '../assets/applogo.svg';
import MatchCard from '@/components/MatchCard';
import MiniNavBar from '@/components/MiniNavBar'; // Import the MiniNavBar

const Home = () => {
  const handleTabChange = (tab: string) => {
    // Handle tab change logic here
    console.log(tab);
  };

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
        height="120vh"
      >
        <Flex>
          <Box left={4}>
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
              perfect match
            </Text>
          </Box>
        </Flex>
        <Box display="flex" justifyContent={"center"}>
        <MiniNavBar onTabChange={handleTabChange} /> {/* Add the MiniNavBar here */}
        </Box>
        <Flex 
          mt="3vh"
          gap={10}
          justify={"center"}
          flexDir={['column','column','column','column', 'row']}
        >
          <Flex
            direction={{ base: 'column', md: 'row' }} 
            justify="center"
            align="center"
          >
            <MatchCard />
          </Flex>
        </Flex>
        <Navbar />
      </Box>
    </>
  );
};

export default Home;
