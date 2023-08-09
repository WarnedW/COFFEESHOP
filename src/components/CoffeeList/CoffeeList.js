import './CoffeeList.scss'


import React from 'react'

import CoffeeListItem from '../CoffeeListItem/CoffeListItem'

const CoffeeList = () => {
   return(
      <ul class="coffee_list">
         <CoffeeListItem/>
         <CoffeeListItem/>
         <CoffeeListItem/>
      </ul>

   )
}

export default CoffeeList