import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { FaRegHeart } from 'react-icons/fa'; // Heart icon
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // X icon, Left and Right arrows
import { useSwipeable } from 'react-swipeable'; // Import swipeable

// Import all dater images
import dater1 from '../assets/dater1.jpg';
import dater2 from '../assets/dater2.jpg';
import dater3 from '../assets/dater3.jpg';
import dater4 from '../assets/dater4.jpg';
import dater5 from '../assets/dater5.jpg';
import dater6 from '../assets/dater6.jpg';
import dater7 from '../assets/dater7.jpg';
import dater8 from '../assets/dater8.jpg';

// Array of images
const daterImages = [
  dater1,
  dater2,
  dater3,
  dater4,
  dater5,
  dater6,
  dater7,
  dater8,
];

// Array of names
const names = [
  "Reggie",
  "Greg",
  "Michael",
  "Sarah",
  "Tom",
  "Bob",
  "John",
  "Joe",
];

// Array of taglines
const taglines = [
  "Loves hiking and outdoor adventures.....",
  "Coffee addict and cat lover.............",
  "Aspiring chef and foodie................",
  "Passionate about art and music...........",
  "Travel enthusiast and thrill seeker.....",
  "Bookworm looking for a partner in crime..",
  "Tech geek and gamer......................",
  "Yoga instructor with a zest for life.....",
];

const MatchCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index

  // Handle swipe events
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeRight(),
    onSwipedRight: () => handleSwipeLeft(),
    trackMouse: true, // Allow mouse tracking for desktop
  });

  // Function to handle swiping right
  const handleSwipeRight = () => {
    if (currentIndex < daterImages.length - 1) {
      setCurrentIndex(currentIndex + 1); // Move to the next image
    }
  };

  // Function to handle swiping left
  const handleSwipeLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous image
    }
  };

  return (
    <Box
      {...handlers} // Spread handlers to the main box
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      mx="auto"
      width={{ base: "90%", md: "460px" }} // Responsive width
      mb={4}
      bg={"white"}
    >
      {/* TOP COMPONENT */}
      <Box display="flex" flexDir="row">
        <Box 
          fontSize={{ base: '18px', md: '20px' }} // Responsive font size
          fontWeight="550"
          flex='1' 
          textAlign="center" 
          p={2}
        >
          {names[currentIndex]} {/* Render name based on current index */}
        </Box>
        <Box flex='1' textAlign="center" p={2}>
          {currentIndex + 1}/{daterImages.length} {/* Display current index */}
        </Box>  
      </Box>

      {/* MIDDLE COMPONENT */}
      <Box display="flex" justifyContent="center" height={{ base: "200px", md: "300px" }} overflow="hidden">
        <Image 
          src={daterImages[currentIndex].src} 
          alt="Profile Picture" 
          maxW="100%" 
          maxH="100%"
          objectFit="cover"
        />
      </Box>

      {/* BOTTOM COMPONENT */}
      <Box display="flex" flexDir="row" p={4}>
        <Box 
          flex="1" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <AiOutlineClose size={24} /> {/* X icon */}
        </Box>
        <Box flex="2" textAlign="center">
          {taglines[currentIndex]} {/* Render tagline based on current index */}
        </Box>
        <Box 
          flex="1" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <FaRegHeart size={24} /> {/* Heart icon */}
        </Box>
      </Box>

      {/* ARROWS COMPONENT */}
      <Box display="flex" flexDir="row" p={4}>
        <Box 
          flex="1" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          onClick={handleSwipeLeft} // Click to swipe left
        >
          <AiOutlineLeft size={24} /> {/* Left arrow icon */}
        </Box>

        <Box 
          flex="1" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          onClick={handleSwipeRight} // Click to swipe right
        >
          <AiOutlineRight size={24} /> {/* Right arrow icon */}
        </Box>
      </Box>
    </Box>
  );
};

export default MatchCard;
