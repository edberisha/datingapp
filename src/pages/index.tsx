import React, { useState } from 'react';
// import Head from 'next/head';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image'; 
import Navbar from '../components/NavBar'; 
import hearts from '../assets/applogo.svg';
import MatchCard from '@/components/MatchCard';
import MatchCardTwo from '@/components/MatchCardTwo'; // Import MatchCardTwo
import MatchCardThree from '@/components/MatchCardThree'; // Import MatchCardThree
// import MiniNavBar from '@/components/MiniNavBar'; 

const Home = () => {
  const [currentCard, setCurrentCard] = useState(0); // State to track current card

  const handleHeartClick = () => {
    setCurrentCard(currentCard + 1); // Move to the next card
  };

  const renderCard = () => {
    switch (currentCard) {
      case 0:
        return <MatchCard onHeartClick={handleHeartClick} />;
      case 1:
        return <MatchCardTwo onHeartClick={handleHeartClick} />;
      case 2:
        return <MatchCardThree />; // Render MatchCardThree
      default:
        return null;
    }
  };

  return (
    <>
      <Box 
        backgroundColor="#fcecdc" 
        p={4} 
        position="relative"
        height="120vh"
      >
        <Flex>
          <Box 
          display={['none','none', 'block', 'block', 'block','block']}
          left={4}>
            <Image 
              src={hearts} 
              alt="Hearts" 
              width={150} 
              height={150} 
            />
            <Text
              textAlign="center"
              color="#e8340c"
              fontSize={'clamp(15px, 1vw, 22px)'}
            >
              perfect match
            </Text>
          </Box>
        </Flex>
        <Box display="flex" justifyContent={"center"}>
          {/* <MiniNavBar onTabChange={handleTabChange} />  */}
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
            {renderCard()} {/* Render the appropriate card based on state */}
          </Flex>
        </Flex>
        <Navbar />
      </Box>
    </>
  );
};

export default Home;
