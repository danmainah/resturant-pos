import React from 'react'
import { foods } from './Array'



export const Meals = () => {
  return (
    <div>
       {
           foods.map((food) => (
               <div key={food.id}>
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
