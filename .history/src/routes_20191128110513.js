import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

const routes = [
  {
    path:'',
    exact: true,
    main: () => <Home/>
  },
  {
    path:'/about',
    exact: true,
    main: () => <About/>
  },
  {
    path:'/contact',
    exact: true,
    main: () => <Contact/>
  },
  {
    path:'',
    exact: true,
    main: () => <Home/>
  }
]