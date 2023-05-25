import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

interface ItemProps {
  email: string;
  name: string;
}

const client = new ApolloClient({
  uri: 'http://10.0.2.2:8000',
  cache: new InMemoryCache(),
});

const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      email
      firstName
      lastName
    }
  }
`;

const Item = ({email, name}: ItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTextColor}>{name}</Text>
      <Text style={styles.itemTextColor}>{email}</Text>
    </View>
  );
};

const RootComponent = () => {
  const {data, loading, error} = useQuery(GET_ALL_USERS);

  if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Lista de usuarios</Text>
      {!loading && data ? (
        <FlatList
          data={data.getAllUsers}
          renderItem={({item}) => (
            <Item
              name={`${item.firstName} ${item.lastName}`}
              email={item.email}
            />
          )}
        />
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#3415e2" />
        </View>
      )}
    </SafeAreaView>
  );
};

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <RootComponent />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    fontSize: 10,
    flexDirection: 'column',
    height: 120,
    margin: 2,
    padding: 20,
    justifyContent: 'center',
    width: '100%',
  },
  itemTextColor: {
    color: '#fff',
    fontSize: 20,
  },
  textTitle: {
    color: '#000',
    fontSize: 50,
  },
});

export default App;
