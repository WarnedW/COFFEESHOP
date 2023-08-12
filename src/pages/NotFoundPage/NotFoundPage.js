import './NotFoundPage.scss'

import React from 'react'

import { Link } from 'react-router-dom'

import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

const NotFoundPage = () => {
   return (
      <div className="NotFoundPage">
         <div className="NotFoundPage__header">
            <div className="container">   
               <Navigation/>
               <h2 className="NotFoundPage__title">NOT FOUND PAGE</h2>
            </div>
         </div>
         <div className="container flex">
            <div className="helper">
               <Link to="/">
                  <button className='NotFoundPage__home'>HOME</button>
               </Link>
            </div>
            <Footer/>
         </div>
      </div>
   )
}

export default NotFoundPage