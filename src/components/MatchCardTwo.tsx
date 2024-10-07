import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { useSwipeable } from 'react-swipeable';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import dater1 from '../assets/GERALD/gerald1.jpg';
import dater2 from '../assets/GERALD/gerald2.jpg';
import dater3 from '../assets/GERALD/gerald3.jpg';

const daterImages: string[] = [
  dater1.src,
  dater2.src,
  dater3.src,
];

const MatchCardTwo: React.FC<{ onHeartClick: () => void }> = ({ onHeartClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeRight(),
    onSwipedRight: () => handleSwipeLeft(),
    trackMouse: true,
  });

  const handleSwipeRight = () => {
    if (currentIndex < daterImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSwipeLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Box
      {...handlers}
      borderWidth={1}
      borderRadius="60px"
      overflow="hidden"
      boxShadow="lg"
      mx="auto"
      mb={4}
      bg={"white"}
    >
      <Box display="flex" flexDir="column" justifyContent="center" overflow="hidden">
        <Image 
          src={daterImages[currentIndex]} 
          alt="Profile Picture" 
          maxW="100%" 
          maxH="350px"
          objectFit="cover"
        />
        <Box display="flex" flexDir="row">
          <Box fontSize={{ base: '18px', md: '20px' }} fontWeight="550" flex='1' textAlign="left" pl={10} pt={2}>
            Gerald, 29
          </Box>
        </Box>
        <Box display="flex" flexDir="row">
          <Box fontSize={{ base: '12px', md: '14px' }} fontWeight="450" color="gray" textAlign="left" pl={10} pt={0} pb={0}>
            Joined Perfect Match yesterday
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDir="row" p={4}>
        <Box flex="1" display="flex" alignItems="center" justifyContent="center">
          <Box 
            borderRadius="50%" 
            bg="gray.200" 
            p={2} 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            onClick={onHeartClick} // Call the handler when clicked
          >
            <AiOutlineClose size={24} />
          </Box>
        </Box>
        <Box flex="2" textAlign="center" fontSize={'15px'}>
          Adventurer at heart seeks co-pilot for life’s ride
        </Box>
        <Box flex="1" display="flex" alignItems="center" justifyContent="center">
          <Box 
            borderRadius="50%" 
            bg="gray.200" 
            p={2} 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <FaRegHeart 
              color="red" 
              size={24} 
              onClick={onHeartClick} // Call the handler when clicked
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MatchCardTwo;
