import './OurCoffee.scss'

import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import { FILTERED_PRODUCTS } from '../../store/actions/actions'

import Navigation from '../../components/Navigation/Navigation'
import CoffeeBeans from '../../components/CoffeBeans/CoffeeBeans'
import CoffeeList from '../../components/CoffeeList/CoffeeList'
import Footer from '../../components/Footer/Footer'
import CoffeeFilters from '../../components/CoffeeFilters/CoffeeFilters'



const OurCoffee = () => {

   const dispatch = useDispatch()
   const {filteredProducts, products, inputFilter, selectFilter} = useSelector(state => state)

   React.useEffect(() => {

      const searchItems = (items, inputFilter) => {
         if (inputFilter.length === 0) {
            return items;
         };

         return items.filter(item => {
            return item.name.toLowerCase().includes(inputFilter);
         });
      };

      const filterPost = (items, selectFilter) => {
          switch (selectFilter) {
              case 'Brazil':
                  return items.filter(item => item.country === 'Brazil');
              case 'Kenya':
                  return items.filter(item => item.country === 'Kenya');
              case 'Columbia':
                  return items.filter(item => item.country === 'Columbia');
              default:
                  return items;
          }
      }

      const sort = filterPost(searchItems(products, inputFilter), selectFilter);
      dispatch(FILTERED_PRODUCTS(sort));

      // eslint-disable-next-line
  }, [inputFilter, selectFilter]);

   const coffeeList = () => {
      return <CoffeeList coffee={filteredProducts}/>
   }

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
            <CoffeeFilters/>
            <div className="list">
               {coffeeList()}
            </div>
            <Footer/>
         </div>
      </div>
   )
}

export default OurCoffee