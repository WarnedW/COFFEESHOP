import './OurCoffee.scss'

import React from 'react'

import Navigation from '../../components/Navigation/Navigation'
import CoffeeBeans from '../../components/CoffeBeans/CoffeeBeans'
import CoffeeList from '../../components/CoffeeList/CoffeeList'
import Footer from '../../components/Footer/Footer'

const OurCoffee = () => {
   return(
      <div className="our_coffee">
         <div className="our_coffee__header">
            <div className="container">   
               <Navigation/>
               <h2 className="our_coffee__title">Our Coffee</h2>
            </div>
         </div>
         <div className="container">
            <div className="about">
               <img src="/images/about.jpg" alt="About" />
               <div className="about__info">
                  <h3 className="about__title">About out beans</h3>
                  <CoffeeBeans color="black"/>
                  <p className="about__description">
                  Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                  Afraid at highly months do things on at. Situation recommend objection do intention
                  so questions. 
                  As greatly removed calling pleased improve an. Last ask him cold feel
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face.
                  </p>
               </div>
            </div>
            <div className="filter">
               <div className="filter__input">
                  <label className="input__label">Looking for</label>
                  <input type="text" className="input" placeholder='start typing here...'/>
               </div>
               <div className="filter__pick">
                  <label className="filter__label">Or filter</label>
                  <div className="filter__btns">
                     <button className="filter__btn">Brazil</button>
                     <button className="filter__btn">Kenya</button>
                     <button className="filter__btn">Columbia</button>
                  </div>
               </div>
            </div>
            <div className="list">
               <CoffeeList/>
            </div>
            <Footer/>
         </div>
      </div>
   )
}

export default OurCoffee