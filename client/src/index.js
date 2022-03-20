import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@fontsource/roboto";

//nav static
import Navigation from "./components/Nav";
//hero (changes depending on the page)
import Hero from './components/Hero'
//contact us page (/contact)
import Contact from "./components/Contact";
//full culture/history page (/culture)
import Culture from "./components/Culture-History";
//footer - static
import Footer from "./components/Footer";
//events page (/events)
import Events from "./components/Events";
//login page (/login)
import Login from "./pages/Login";
//signup page (/register)
import Signup from "./pages/Signup";
//membership page (/join)
import Membership from "./components/Membership";
//aboutus page (/about)
import AboutGroup from './components/AboutGroup'
//landing page (/)
import Landing from "./pages/Landing";
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
        <Hero />
        <Route>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path='about' component={AboutGroup} />
          <Route exact path="/membership" component={Membership} />
          <Route exact path="/events" component= {Events} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/culture" component={Culture} />
        </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
