import { Box, IconButton } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const handleMessagesClick = () => {
    router.push('/messages'); // Navigate to the messages page
  };

  const handleHomeClick = () => {
    router.push('/'); // Navigate to the messages page
  };

  const handleProfileClick = () => {
    router.push('/profile'); // Navigate to the messages page
  };

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
        onClick={handleHomeClick}
      />
      <IconButton
        aria-label="Messages"
        icon={<AiOutlineMessage />}
        variant="ghost"
        fontSize="2xl" // Increased size
        onClick={handleMessagesClick} // Add click handler
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
        onClick={handleProfileClick}

      />
    </Box>
  );
};

export default Navbar;
