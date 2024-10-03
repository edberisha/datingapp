import { Box, Text, Stack, Image, Input, Button, Flex } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import guyphoto from '../assets/guyphoto.jpeg';

const ChatAlerts = () => {
  const [messages, setMessages] = useState([
    { sender: 'S', text: 'Nice collar.', color: '#e8340c' },
    { sender: 'C', text: 'Thanks. ;', color: '#f0f0f0' },
    { sender: 'S', text: 'I’m assuming this is the dog’s owner speaking?', color: '#e8340c' },
    { sender: 'C', text: 'Guilty. What gave me away?', color: '#f0f0f0' },
    { sender: 'S', text: 'I don’t think Fido’s figured out how to type yet. As smart-looking as his collar is.', color: '#e8340c' },
    { sender: 'C', text: 'Well, I’ve got quite the collection of collars myself. I’m sure one of them makes me look smarter too.', color: '#f0f0f0' },
    { sender: 'S', text: 'Finally, someone who understands me.', color: '#e8340c' },
    { sender: 'C', text: 'I think we might understand each other more than you know.', color: '#f0f0f0' },
    { sender: 'S', text: 'Oh really? I’m intrigued.', color: '#e8340c' },
    { sender: 'C', text: 'Good. I have a good feeling about you, Sarah.', color: '#f0f0f0' },
    { sender: 'S', text: 'Gosh, I hate it when men on this app type out my full name. It feels so formal.', color: '#e8340c' },
    { sender: 'C', text: 'Noted. I’m taking suggestions for alternate things to call you then.', color: '#f0f0f0' },
    { sender: 'S', text: 'Try me.', color: '#e8340c' },
    { sender: 'C', text: 'What feels like “you”? ', color: '#f0f0f0' },
    { sender: 'S', text: 'Let me think about it. I used to get called by my middle name sometimes when I was a kid. I think that’s when I felt most connected to myself. I don’t know if I’ve ever really felt that free since…', color: '#e8340c' },
    { sender: 'C', text: 'Sorry, is that a lot?', color: '#f0f0f0' },
    { sender: 'S', text: 'You’re proving my point, Not-Sarah. Apparently we do understand each other more than you know.', color: '#e8340c' },
    { sender: 'C', text: 'Really? You don’t think it’s weird that I’m spilling all of this in a first conversation?', color: '#f0f0f0' },
    { sender: 'S', text: 'Not at all. What are these things for? I want to get to know you, Not-Sarah.', color: '#e8340c' },
    { sender: 'C', text: 'Stop, you’re making me laugh.', color: '#f0f0f0' },
    { sender: 'S', text: 'I’m serious. I want to know you. The real you.', color: '#e8340c' },
    { sender: 'C', text: 'Curtis… Wow.', color: '#f0f0f0' },
    { sender: 'S', text: 'Too much?', color: '#e8340c' },
    { sender: 'C', text: 'Not at all.', color: '#f0f0f0' },
    { sender: 'S', text: 'Thank god. I was hoping I hadn’t messed this up by being all intense.', color: '#e8340c' },
    { sender: 'C', text: 'No, really. I mean it. I’ve always been drawn to people who challenge me.', color: '#f0f0f0' },
    { sender: 'S', text: 'You’re giving me butterflies.', color: '#e8340c' },
    { sender: 'C', text: 'That’s what’s special about talking to someone. What’s next for you?', color: '#f0f0f0' },
    { sender: 'S', text: 'I can’t wait to hear more about him.', color: '#e8340c' },
    { sender: 'C', text: 'And I can’t wait to tell you more about him.', color: '#f0f0f0' },
    { sender: 'S', text: 'You. I can’t wait to move in with you.', color: '#e8340c' },
    { sender: 'C', text: 'We can finally start our life together.', color: '#f0f0f0' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages, 
        { sender: 'S', text: newMessage, color: '#e8340c' }
      ]);
      setNewMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Box
      // border="2px solid purple"
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg="#ffffff"
      boxShadow="lg"
      mx="auto"
      minW="360px"
      maxH="75vh" // Adjusted maximum height
      display="flex"
      flexDirection="column"
    >
      <Text textAlign="center" fontSize="lg" fontWeight="bold" mb={3}>
        Curtis
      </Text>
      <Image
        src={guyphoto.src}
        alt="Guy"
        borderRadius="full"
        boxSize="100px"
        mx="auto"
        mb={4}
      />
      <Box
        ref={chatRef}
        overflowY="auto"
        flex="1" // Allow it to grow and fill the available space
        maxH="60vh" // Set a max height for the chat area
      >
        <Stack spacing={3}>
          {messages.map((message, index) => (
            <Box
              key={index}
              style={{
                padding: '1rem',
                borderWidth: '1px',
                borderRadius: '0.375rem',
                backgroundColor: message.color,
                marginLeft: message.sender === 'S' ? 'auto' : '0',
                maxWidth: '75%',
                display: 'inline-block',
                alignSelf: message.sender === 'S' ? 'flex-end' : 'flex-start',
              }}
            >
              <Text color={message.sender === 'S' ? '#ffffff' : 'black'}>
                <strong>{message.sender}:</strong> {message.text}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Flex mt={4}>
        <Input
          value={newMessage}
          onKeyDown={handleKeyDown}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          mr={2}
        />
        <Button onClick={handleSend} colorScheme="teal">Send</Button>
      </Flex>
    </Box>
  );
};

export default ChatAlerts;
