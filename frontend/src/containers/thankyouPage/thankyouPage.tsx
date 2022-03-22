import {Box, Container} from '@chakra-ui/react';
import React from 'react';
import components from '../../components';

const ThankyouPage = () => {
  return (
    <Box h={'100vh'} p={'25px'} pt={'50px'} alignContent={'center'}>
      <components.Heading text='Thank You!' />
    </Box>
  );
};

export default ThankyouPage;
