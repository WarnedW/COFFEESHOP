import './CoffeeFilters.scss'

import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { CHANGE_FILTER_INPUT, SELECT_FILTER,  } from '../../store/actions/actions'

const CoffeeFilters = () => {

   const dispatch = useDispatch()
   const {inputFilter} = useSelector(state => state)

   const setCountry = (country) => {
      dispatch(SELECT_FILTER(country))
   }

   const setInputFilter = (value) =>{
      dispatch(CHANGE_FILTER_INPUT(value))
   }

   return (
      <div className="filter">
      <div className="filter__input">
         <label className="input__label">Looking for</label>
         <input type="text" className="input" placeholder='start typing here...' value={inputFilter} onChange={(e) => setInputFilter(e.target.value)}/>
      </div>
      <div className="filter__pick">
         <label className="filter__label">Or filter</label>
         <div className="filter__btns">
            <button className="filter__btn" onClick={() => {
               setCountry('Brazil')
            }}>
            Brazil</button>
            <button className="filter__btn" onClick={() => {
               setCountry('Kenya')
            }}>Kenya</button>
            <button className="filter__btn" onClick={() => {
               setCountry('Columbia')
            }}>Columbia</button>
         </div>
      </div>
      </div>
   )
}

export default CoffeeFilters
