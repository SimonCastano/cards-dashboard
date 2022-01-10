import React from 'react'
import './header.css'


function Header({ children }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social Media Dashboard - Tutorial</h1>
            <p className="header-total">Total Followers: 23, 004</p>
            <p className="header-total">Simon Arbey Castaño Rios - Leonidas esteban</p>
          </div>
          {children}
        </div>
      </div>
    </header>
  )
}

export default Header