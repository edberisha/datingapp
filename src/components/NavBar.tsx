import { Box, IconButton } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  return (
    <Box
    zIndex={10}
      position="fixed"
      bottom="0"
      width="100vw"
      backgroundColor="#ff944c"
      left="0"
      boxShadow="md"
      py={3}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <IconButton
        aria-label="Home"
        icon={<AiOutlineHome />}
        variant="ghost"
        fontSize="2xl" // Increased size
      />
      <IconButton
        aria-label="Messages"
        icon={<AiOutlineMessage />}
        variant="ghost"
        fontSize="2xl" // Increased size
      />
      <IconButton
        aria-label="Favorites"
        icon={<AiOutlineHeart />}
        variant="ghost"
        fontSize="2xl" // Increased size
      />
      <IconButton
        aria-label="Profile"
        icon={<AiOutlineUser />}
        variant="ghost"
        fontSize="2xl" // Increased size
      />
    </Box>
  );
};

export default Navbar;
