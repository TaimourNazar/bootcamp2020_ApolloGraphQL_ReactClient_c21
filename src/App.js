import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client';
import UserData from './components/userdata';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        Hello from App Component
        <UserData/>
      </div>
    </ApolloProvider>
  );
}

export default App;
