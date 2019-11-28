import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
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
    path:'',
    exact: false,
    main: () => <NotFound/>
  }
]