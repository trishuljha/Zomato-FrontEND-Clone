import React from 'react';
import './delivery.css';
import { RestaurantList } from '../../data/restaurants';
import Filters from '../common/filters';
import DelieveryCollection from './deliverycollection';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSection';

const deliveryfilters=[
  {
    id:1,
    filterName:"filter",
    icon:<i className="fa-solid fa-filter absolute-center"></i>
  },
  {
    id:2,
    filterName:"Rating: 4.0+"
  },
  {
    id:3,
    filterName:"Pure Veg",
  },
  {
    id:4,
    filterName:"Cuisines",
    icon:<i className="fa-solid fa-caret-down absolute-center"></i>
  }
];

function Delivery() {
  return (
    <div>
    <div className='max-width'>
      <Filters FilterList={deliveryfilters}/>
      </div>
      <DelieveryCollection/>
      <TopBrands/>
      <ExploreSection list={RestaurantList} collectionName="Delivery Restaurant in Delhi"/>
       </div>
  )
}

export default Delivery