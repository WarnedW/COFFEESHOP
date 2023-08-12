import './About.scss'

import React from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navigation from '../../components/Navigation/Navigation'
import CoffeeBeans from '../../components/CoffeBeans/CoffeeBeans'
import Footer from '../../components/Footer/Footer'


const About = () => {
   const { products } = useSelector(state => state);
   const { id } = useParams();

   const element = products.find(item => item.id === Number(id));

   if (!element) return <Navigate to="/" />;
   const { country, price } = element

   return (
      <div className="about_coffee">
         <div className="about_coffee__header">
            <div className="container">   
               <Navigation/>
               <h2 className="about_coffee__title">Our Coffee</h2>
            </div>
         </div>
         <div className="container">
            <Link to="/">
               <button className='about__back'>BACK</button>
            </Link>
            <div className="about">
               <img src="/images/81tGmkXdGLL.jpg" alt="About" className='about__image'/>
               <div className="about__info">
                  <h3 className="about__title">About it</h3>
                  <CoffeeBeans color="black"/>
               <p className="about__count"><b>Country: </b>{country}</p>
               <p className="about__descr"><b>Description: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p className="about__price"><b>Price: </b>{price}$</p>
               </div>
            </div>
            <Footer/>
         </div>
      </div>
   )
}

export default About