<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@fontsource/roboto";
import Navigation from "./components/Nav";
import Contact from "./components/Contact";
import Culture from "./components/Culture-History";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Membership from "./components/Membership";
import Home from "./components/Home";
import theme from "./theme";
import { ThemeProvider } from "@mui/styles";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
//Todo-- This needs to be included to load all pages from APP.js or we can render them individually.
// import App from './App';
/*ApolloProvider is a special type of React component that we'll use to provide data to all of the other components.

ApolloClient is a constructor function that will help initialize the connection to the GraphQL API server.

InMemoryCache enables the Apollo Client instance to cache API response data so that we can perform requests more efficiently.

createHttpLink allows us to control how the Apollo Client makes a request. Think of it like middleware for the outbound network requests.*/

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//Combining authLink and httpLink

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
///Example
{
  /* <div className="container">
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/thought" component={SingleThought} />

    <Route component={NoMatch} />
  </Switch>
</div> */
}
//Todo -we need to render these pages correctly here...Only memebership works so far
ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation />
        <Route>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/membership" component={Membership} />
          <Route path="/events" component= {Events} />
          <Route path="/contact" component={Contact} />
          <Route path="/culture" component={Culture} />
        </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder)
