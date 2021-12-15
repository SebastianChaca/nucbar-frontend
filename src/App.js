import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Public } from './Routes/Public/Public';
import Private from './Routes/Private/Private';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Layout } from './Routes/Layout/Layout';
import { theme } from './Chakra/Theme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Router>
            <Layout>
              <Public />
              <Private />
            </Layout>
          </Router>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
