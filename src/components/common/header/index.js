import React from 'react';
import './header.css'
function Header() {
  return (
    <div className="max-width header">
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt="Zomato-logo" className="header-logo"/>
      <div className="header-right">
        <div className="headerlocationSearch">
          <div className="location-wrapper">
            <div className="location-icon">
            <i className="fa-solid fa-location-dot absolute-center location-icons left"></i>
            <div>Bangalore</div>
            </div>
            <i class="fa-solid fa-caret-down absolute-center caretdown"></i>
          </div>
          <div className="location-search-seperator"></div>
          <div className='header-searchbar'>
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input placeholder="Search for Restaurent, Cuisine or Dish" className="search-input"></input>
          </div>
        </div>
        <div className='profile-wrapper'>
        <img src="https://assets.leetcode.com/users/avatars/avatar_1690271836.png" alt="profileimage" className="absolute-center header-profile-image"></img>
        
        <span className="header-username left">Trishul</span>
        <i class="fa-solid fa-caret-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Header;