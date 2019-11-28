import React from 'react'

import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const routes = [
  {
    title: 'Home Page',
    path:'',
    exact: true,
    main: () => <Home/>
  },
  {
    title: 'About Page',
    path:'/about',
    exact: false,
    main: () => <About/>
  },
  {
    title: 'Contact Page',
    path:'/contact',
    exact: false,
    main: () => <Contact/>
  },
  {
    title: 'NotFound Page',
    path:'',
    exact: false,
    main: () => <NotFound/>
  }
]

export default routes;