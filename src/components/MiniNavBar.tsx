import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const MiniNavBar: React.FC<{ onTabChange: (tab: string) => void }> = ({ onTabChange }) => {
  return (
    <Box mb={4} width="70vh">
      <Flex justify="space-around">
        <Button 
          onClick={() => onTabChange('matches')}
          variant="link" 
          color="white"
          bg="#e8340c"
          padding={2}
          fontSize={['12px','14px','14px','14px','16px','18px']}

        >
          My Matches
        </Button>
        <Button 
          onClick={() => onTabChange('out-there')} 
          variant="link" 
          color="white"
          bg="#e8340c"
          padding={2}
          fontSize={['12px','14px','14px','14px','16px','18px']}
        >
          See Who&apos;s Out There
        </Button>
      </Flex>
    </Box>
  );
};

export default MiniNavBar;
