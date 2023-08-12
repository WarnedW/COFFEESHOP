import './CoffeListItem.scss'

import React from 'react'

import { Link } from 'react-router-dom'

const CoffeeListItem = ({id, src, name, country, price}) => {
   return(
      <Link to={`/ourCoffee/${id}`} rel="noopener noreferrer">
         <li class="coffee_card">
            <img src={src} alt="#" class="coffee_card__img"/>
            <div class="coffee_card__description">
               <h3 class="coffee_card__name">{name}</h3>
               <p class="coffee_card__country">{country}</p>
               <p class="coffee_card__price">{price}</p>
            </div>
         </li>
      </Link>

   )
}

export default CoffeeListItem