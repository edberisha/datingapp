import { Box, Text, VStack, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import amy from '../assets/amy.jpg'; // Ensure this path is correct

const ProfileCard = () => {
  return (
    <Box
      maxW="md"
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg="#ffffff"
      boxShadow="lg"
    >
      <Box borderRadius="full" overflow="hidden" width="150px" height="150px" mx="auto">
        <Image
          src={amy}
          alt="Profile Photo"
          layout="responsive"
          width={150}
          height={150}
        />
      </Box>
      <VStack mt={4} spacing={3} align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Rebecca, 48
        </Text>
        <Text color="gray.600">Sexy Sagittarius</Text>
        <Stack spacing={2} align="center">
          <Text fontWeight="bold">Facts:</Text>
          <Text>•Looking for a yoga partner and spiritual soulmate.</Text>
          <Text>• Let&apos;s get coffee and see where this goes?</Text>
        </Stack>
      </VStack>
    </Box>
  );
};

export default ProfileCard;
