import 'react-native-gesture-handler';
import React from 'react';
import {RootNavigator} from './navigation/RootNavigation';
import {ApolloClient, ApolloProvider} from '@apollo/client';
import {cache} from 'graphql';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GestureHandlerRootView style={{flex: 1}}>
        <RootNavigator />
      </GestureHandlerRootView>
    </ApolloProvider>
  );
};

export default App;
