import './ForYourPleasure.scss'

import React from 'react'
import {useSelector} from 'react-redux'

import Navigation from '../../components/Navigation/Navigation'
import CoffeeBeans from '../../components/CoffeBeans/CoffeeBeans'
import CoffeeList from '../../components/CoffeeList/CoffeeList'
import Footer from '../../components/Footer/Footer'

const ForYourPleasure = () => {
   const products = useSelector(state => state.products)

   const coffeeList = () => {
      return <CoffeeList coffee={products}/>
   }

   return(
      <div className="ForYourPleasure_coffee">
         <div className="ForYourPleasure_coffee__header">
            <div className="container">   
               <Navigation/>
               <h2 className="ForYourPleasure_coffee__title">For your pleasure</h2>
            </div>
         </div>
         <div className="container">
            <div className="about">
               <img src="/images/pleasure.png" alt="ForYourPleasure" />
               <div className="about__info">
                  <h3 className="about__title">About our goods</h3>
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
            <div className="list">
               {coffeeList()}
            </div>
            <Footer/>
         </div>
      </div>
   )
}

export default ForYourPleasure