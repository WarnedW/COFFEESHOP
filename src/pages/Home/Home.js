import './Home.scss'

import React from 'react'

import Navigation from '../../components/Navigation/Navigation'
import CoffeeBeans from '../../components/CoffeBeans/CoffeeBeans'
import CoffeeList from '../../components/CoffeeList/CoffeeList'
import Footer from '../../components/Footer/Footer'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <div className="header">
      <div className="container">
         <Navigation/>
         <h1 className="header__title">Everything You Love About Coffee</h1>
         <CoffeeBeans color='white'/>
         <h2 className="header__subtitle">
            We makes every day full of energy and taste<pre/>Want to try our beans?
         </h2>
         <Link className="btn" to='/OurCoffee' >More</Link>
         {/* <a href="x" className="btn">More</a> */}
      </div>
   </div>
   <div class="about_us">
      <div class="about_us__container">
         <h2 class="about_us__title">
            About Us
         </h2>
         <CoffeeBeans color='black' />
         <p class="about_us__description">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
         </p>
         <br/>
         <p class="about_us__description">
            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
         </p>
      </div>
   </div>
   <div class="best">
      <div class="best__container">
         <h2 class="best__title">Our Best</h2>
         <CoffeeList/>
      </div>
   </div>
   <Footer/>
   </>
  )
}

export default Home
