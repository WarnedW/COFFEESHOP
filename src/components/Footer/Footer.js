import './Footer.scss'

import React from 'react'

import CoffeeBeans from '../CoffeBeans/CoffeeBeans'
import Navigation from '../Navigation/Navigation'

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container">
            <Navigation color='black'/>
            <CoffeeBeans color='black'/>
         </div>
      </footer>
   )
}

export default Footer