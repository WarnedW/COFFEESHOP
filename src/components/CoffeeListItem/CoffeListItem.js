import './CoffeListItem.scss'

import React from 'react'

const CoffeeListItem = () => {
   return(
      <li class="coffee_card">
         <img src="/images/coffee1.png" alt="#" class="coffee_card__img"/>
         <div class="coffee_card__description">
            <h3 class="coffee_card__name">Solimo Coffee Beans 2 kg</h3>
            <p class="coffee_card__country">Brazil</p>
            <p class="coffee_card__price">10.73$</p>
         </div>
      </li>
   )
}

export default CoffeeListItem