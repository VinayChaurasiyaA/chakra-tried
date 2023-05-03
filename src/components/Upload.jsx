import { Box, Button, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Box h="100vh" maxW={'container.xl'} p={16}>
      <VStack color={'purple.500'} h="full" justifyContent={'center'}>
        {/* <label htmlFor="" type="upload"></label> */}
        <AiOutlineUpload size={'10vmax'} cursor={'pointer'} />
        <form>
          <HStack>
            <Input
              type="file"
            //   p={4}
            //   margin={4}
              alignItems={'center'}
              justifyContent={'center'}
              css={{
                '&::file-selector-button' : {
                    border : "none",
                    height:"100%",
                    width: "calc(100% + 36px)",
                    color:"purple",
                    marginLeft:"-18px",
                    background: "transparent",
                    cursor:"pointer"

                }
              }}
            />
            <Button colorScheme='purple'>Upload</Button>
          </HStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Upload;
