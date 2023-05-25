import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000",
  cache: new InMemoryCache(),
});

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      _id
      email
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser($input: RegisterUserInput) {
    registerUser(input: $input) {
      _id
      email
      firstName
      gender
      lastName
    }
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
