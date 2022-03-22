import {Container, Heading as ChakraHeading} from '@chakra-ui/react';
import React from 'react';

export const Heading = ({text}: {text: string}) => {
  return (
    <Container mb={'5'} justifyContent={'center'}>
      <ChakraHeading>{text}</ChakraHeading>
    </Container>
  );
};
