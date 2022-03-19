import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fontsource/roboto';
import Navigation from './components/Nav';
import Footer from './components/Footer';
import Events from './components/Events';
import Login from './components/Login';
import Membership from './components/Membership';
import Home from './components/Home';
import Contact from './components/Contact';
import theme from './theme'
import {ThemeProvider} from '@mui/styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Router>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/membership' element={<Membership />} />
      <Route path='/events' element={<Events />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
  </ThemeProvider>,

  document.getElementById('root')
);

// serviceWorker.unregister();