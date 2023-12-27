import React from 'react';
import './filters.css';
import FilterItem from './filteritem';

const Filters = ({FilterList}) => {
  return (
    <div className='filters max-width'>{FilterList && FilterList.map((filter)=>{
        return <FilterItem filter={filter} key={filter.id}/>
    })}</div>
  )
}

export default Filters;