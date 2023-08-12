import './CoffeeList.scss'


import React from 'react'

import CoffeeListItem from '../CoffeeListItem/CoffeListItem'

const CoffeeList = ({coffee}) => {
   return(
      <ul class="coffee_list">
         {coffee.map((item) => {
            return <CoffeeListItem key={item.key} {...item}/>
         })}
      </ul>

   )
}

export default CoffeeList