import React from 'react'
import { foods } from './Array'
import './css/Meals.css'


export const Meals = () => {
  return (
    <div className='container'>
       {
           foods.map((food, index) => (
               <div key={index} className='card'>
                   <h1>{food.title}</h1>
                   <img src={food.img} alt={food.title}/>
                   <span>Ksh {food.price}</span>
                   <p>{food.description}</p>
               </div>
           ))
       }
    </div>
  )
}
