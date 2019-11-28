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
    main: () => <Home/>
  },
  {
    path:'/about',
    exact: false,
    main: () => <About/>
  },
  {
    path:'/contact',
    exact: false,
    main: () => <Contact/>
  },
  {
    path:'/products',
    exact: false,
    main: ({match}) => <Products match={match}/>
    // match object has:
    // isExact: true
    // params:
    // path: "/products"
    // url: "/products"
  },
  {
    path:'',
    exact: false,
    main: () => <NotFound/>
  }
]

export default routes;