import React from 'react'

import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import NotFound from './components/NotFound';

const routes = [
  {
    path:'',
    exact: true,
    main: () => <Home />
  },
  {
    path:'/about',
    main: () => <About />
  },
  {
    path:'/contact',
    main: () => <Contact />
  },
  {
    path:'/products',
    main: ({match}) => <Products match={match}/>
  },
  {
    path:'',
    main: () => <NotFound />
  }
]

export default routes;