import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { useSwipeable } from 'react-swipeable';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import dater1 from '../assets/JIM/jim1.jpg';
import dater2 from '../assets/JIM/Jim2.jpg';

const daterImages = [
  dater1,
  dater2,
];

const MatchCardThree: React.FC = () => {
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
      {/* MIDDLE COMPONENT */}
      <Box display="flex" flexDir="column" justifyContent="center" overflow="hidden">
        <Image 
          src={daterImages[currentIndex].src} 
          alt="Profile Picture" 
          maxW="100%" 
          maxH="350px"
          objectFit="cover"
        />
        {/* NAME */}
        <Box display="flex" flexDir="row">
          <Box 
            fontSize={{ base: '18px', md: '20px' }} 
            fontWeight="550"
            flex='1' 
            textAlign="left" 
            pl={10}
            pt={2}
          >
            Jim, 34
          </Box>
        </Box>
        <Box display="flex" flexDir="row">
          <Box 
            fontSize={{ base: '12px', md: '14px' }} 
            fontWeight="450"
            color="gray"
            textAlign="left" 
            pl={10}
            pt={0}
            pb={0}
          >
            
          </Box>
        </Box>
      </Box>

      {/* BOTTOM COMPONENT */}
      <Box display="flex" flexDir="row" p={4}>
        <Box 
          flex="1" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <Box 
            borderRadius="50%" 
            bg="gray.200" 
            p={2} 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            onClick={() => console.log("Close clicked")} // Optional click handler
          >
            <AiOutlineClose size={24} />
          </Box>
        </Box>
        
        <Box 
          flex="2" 
          textAlign="center"
          fontSize={'15px'}
        >
          Swipe right if you believe in love and fun chats
        </Box>
        
        <Box 
          flex="1" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
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
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MatchCardThree;
