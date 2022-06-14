import React from 'react'
import './css/Nav.css'

export const Nav = () => {
  return (
    <nav className='nav'>
        <a href='homepage'>Logo</a>
        <div className='menus'>
            <a href='/'>Meals</a>
            <a href='/'>Drinks</a>
            <a href='/'>Desserts</a>
        </div>
        <div className='cart'>
            <a href='/'>Cart</a>
        </div>
    </nav>
  )
}
