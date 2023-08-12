import React, {Suspense} from 'react'

import Home from './pages/Home/Home'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Spinner from './components/Spinner/Spinner'

const OurCoffee = React.lazy(() => import('./pages/OurCoffee/OurCoffee')) ;
const ForYourPleasure = React.lazy(() => import( './pages/ForYourPleasure/ForYourPleasure'));
const About = React.lazy(() => import('./pages/About/About'));

function App() {

  return (
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/OurCoffee" element={<Suspense fallback={<Spinner/>}><OurCoffee/></Suspense>}/>
          <Route path="/OurCoffee/:id" element={<Suspense fallback={<Spinner/>}><About/></Suspense>}/>
          <Route path="/ForYourPleasure" element={<Suspense fallback={<Spinner/>}><ForYourPleasure/></Suspense>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
