import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={16} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={'stretch'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to my life
          </Heading>
          <HStack py={2}>
            <Input placeholder="Enter your email" type="email" />
            <Button
              p={0}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '2px solid white']}
          borderRight={['none', '2px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video hub
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading>Socials</Heading>
          <Text variant={'ghost'}>
            <a href="https://www.google.com">Google</a>
          </Text>
          <Text variant={'ghost'}>
            <a href="https://www.google.com">Google</a>
          </Text>
          <Text variant={'ghost'}>
            <a href="https://www.google.com">Google</a>
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
