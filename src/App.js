import React from 'react'

import Home from './pages/Home/Home'
import OurCoffee from './pages/OurCoffee/OurCoffee';
import ForYourPleasure from './pages/ForYourPleasure/ForYourPleasure'

import {BrowserRouter, Route, Routes }from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/OurCoffee" element={<OurCoffee/>}/>
          <Route path="/ForYourPleasure" element={<ForYourPleasure/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
