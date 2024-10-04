import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import ChatAlerts from '../components/ChatAlerts';
import Navbar from '../components/NavBar'; 

function Messages() {
    return (
      <>
        <ChatAlerts />
      </>
    );
}

export default Messages;
