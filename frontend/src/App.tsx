import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import {createClient, Provider} from 'urql';
import {ChakraProvider} from '@chakra-ui/react';

import {MasterForm} from './containers/mainForm';
import {ThankyouPage} from './containers/thankyouPage';

const client = createClient({
  url: 'http://localhost/api/graphql',
});

const App = () => {
  return (
    <Provider value={client}>
      <ChakraProvider>
        <Routes>
          <Route path='/thanks' element={<ThankyouPage />} />
          <Route path='/:name' element={<MasterForm />} />
        </Routes>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
