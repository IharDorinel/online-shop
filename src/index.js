import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import {Provider} from "react-redux";
import {store} from "./store";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
    </Provider>
);
