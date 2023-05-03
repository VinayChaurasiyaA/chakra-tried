import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <Container Maxw={'container.xl'} h={'100vh'} >
      <form>
        <VStack alignItems={'stretch'} spacing={8} w={["full" , 96]} m={'auto'} my={16}>
          <Heading>Login, Welcome Back</Heading>
          <Input
            required
            type="email"
            placeholder="Enter your email"
            focusBorderColor="purple.500"
          ></Input>
          <Input
            required
            type="password"
            placeholder="password"
            focusBorderColor="purple.500"
          ></Input>

          <Button variant={'link'} alignSelf={"flex-end"} >
            <Link to={'/forgetpasswor'} >
              Forget Password?
            </Link>
          </Button>
          <Button color={"purple.500"} type="submit" variant="solid">
            Login
          </Button>
          <Text alignSelf={"flex-end"}>
            New User? {" "}
            <Button variant={"ghost"} colorScheme='purple' >
                <Link to={"/signup"}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
