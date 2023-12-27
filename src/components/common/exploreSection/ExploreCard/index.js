import React from 'react';
import './Explorecard.css';
const ExploreCard = ({rest}) => {
  return (
    <div className='explore-card cur-po '> 
    <div className='explore-card-cover'>
      <img src={rest.cover} alt={rest.title} className='explore-card-image'></img>
      <div className='delivery-time'>{rest.time}</div>
      {rest.pro_off && <div className='pro-off'> {rest.pro_off}</div>}
      </div>
      <div className='res-row'>
        <div className='res-name'>{rest.title}</div>
        {
          rest.rating && <div className='res-rating absolute-center'>
            {rest.rating} <i class="fa-regular fa-star absolute-center"></i>
          </div>
        }
      </div>
      <div className='res-row'>
        <div className='res-cuisine'>{rest.minicontent}</div>
        <div className='res-approx'>{rest.content}</div>
      </div>
      </div>
      
  )
}

export default ExploreCard