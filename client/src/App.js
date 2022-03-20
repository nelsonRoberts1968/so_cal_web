import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ThemeProvider } from '@material-ui/core/styles'

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';
import Culture from './pages/Culture'
import About from './components/About';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ThemeProvider>
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/membership" component={Membership} />
              <Route exact path="/culture" component={Culture} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={ContactUs} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;